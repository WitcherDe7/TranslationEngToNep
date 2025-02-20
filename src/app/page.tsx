"use client"
import { Button, Card, Column, Flex, Icon, Input, Text } from "@/once-ui/components";
import React, { useState } from "react";

const Translator = () => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const parseMeaning = (data: any): string => {
    if (!data.meaning || !Array.isArray(data.meaning)) return "No meaning found";

    // Extract pronunciation (last element)
    const pronunciation = data.meaning[data.meaning.length - 1] || "";
    const meaningWithoutPronunciation = data.meaning.slice(0, -1);

    // Extract Nepali text (Devanagari Unicode range)
    const nepaliMeanings = meaningWithoutPronunciation.filter((item: any) =>
      typeof item === "string" && /[\u0900-\u097F]/.test(item)
    );

    // Extract other meanings excluding the word itself
    const otherMeanings = meaningWithoutPronunciation.filter((item: any) =>
      typeof item === "string" &&
      !/[\u0900-\u097F]/.test(item) &&
      item !== data.word
    );

    // Format other meanings
    const formattedOther = otherMeanings
      .map((item: string) => item.replace(/<[^>]+>/g, ""))
      .join("\n");

    // Combine results
    let result = `${data.word}\n/${pronunciation}/\n`;
    if (nepaliMeanings.length > 0) {
      result += `In Nepali language: ${nepaliMeanings.join(", ")}\n\n`;
    }
    result += formattedOther;
    // result;

    return result;
  };

  const fetchMeaning = async () => {
    if (!word) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://xdee.pythonanywhere.com/meaning/${word}?format=json`
      );
      const data = await response.json();
      setMeaning(parseMeaning(data));
    } catch (err) {
      setError("Failed to fetch meaning");
    }
    setLoading(false);
  };

  return (
    <Column marginTop="12" center>
      <Flex
        radius="m"
        direction="column"
        gap="24"
        padding="24"
        vertical="center"
        horizontal="center"
        maxWidth={60}
        onBackground="brand-strong"
        background="brand-medium"
      >
        
        <Input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          hasSuffix={<Icon name="infoCircle" />} 
          id={""} 
          label={"Enter a word"}  
          labelAsPlaceholder   
          width={20}     
          />
        <Button 
        onClick={fetchMeaning} 
        disabled={loading}
        suffixIcon="sparkle"
        >
          {loading ? "Translating..." : "Translate"}
        </Button>
        {error && <p className="text-red-500">{error}</p>}
        {meaning && (
          <Card
            maxWidth={50}
            border="surface"
            direction="column"
            onBackground="brand-weak"
            background="brand-medium"
          >
            <Column
              fillWidth
              paddingX="20"
              paddingY="24"
              gap="8"
            >
              <Text variant="body-default-xl">
                Meaning
              </Text>
              <Text
                onBackground="neutral-weak"
                variant="body-default-s"
                style={{ whiteSpace: "pre-line" }} // Ensures newlines render
              >
                {meaning}
              </Text>
            </Column>
          </Card>
        )}
      </Flex>
    </Column>
  );
};

export default Translator;