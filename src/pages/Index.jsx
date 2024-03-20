import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, VStack, HStack, IconButton, Spacer, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      toast({
        title: "Please enter a todo",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="600px" margin="auto" mt={8}>
      <Heading mb={8} textAlign="center">
        Todo App
      </Heading>
      <form onSubmit={handleSubmit}>
        <HStack>
          <Input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter a todo" />
          <Button type="submit" colorScheme="blue" px={8}>
            <FaPlus />
          </Button>
        </HStack>
      </form>
      <VStack mt={8} spacing={4} alignItems="stretch">
        {todos.map((todo, index) => (
          <HStack key={index}>
            <Text>{todo}</Text>
            <Spacer />
            <IconButton icon={<FaTrash />} onClick={() => deleteTodo(index)} colorScheme="red" />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
