import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaUpload } from 'react-icons/fa';

const Index = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [uploaded, setUploaded] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImageSrc(e.target.result);
        setUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" textAlign="center">
          Image Topography Replicator
        </Heading>
        <Text textAlign="center">
          Upload an image to see it replicated in the form of topography.
        </Text>
        <Box
          p={4}
          borderWidth="2px"
          borderRadius="lg"
          borderColor="gray.200"
          textAlign="center"
        >
          {uploaded ? (
            <Image src={imageSrc} alt="Uploaded Image" maxH="300px" />
          ) : (
            <Text>Upload an image to begin.</Text>
          )}
        </Box>
        <Stack direction="row" spacing={4}>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            display="none"
            id="file-upload"
          />
          <Button
            leftIcon={<FaUpload />}
            colorScheme="teal"
            as="label"
            htmlFor="file-upload"
          >
            Upload Image
          </Button>
        </Stack>
        {uploaded && (
          <Center>
            <Button colorScheme="blue" isDisabled>
              Generate Topography
            </Button>
          </Center>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
