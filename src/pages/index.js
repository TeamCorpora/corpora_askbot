import QuestionBox from "@/components/QuestionBox";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

import { Navbar } from "@/components/LeftNavbar";
import {
  Box,
  Button,
  Center,
  Flex,
  Paper,
  Text,
  TextInput,
  Textarea,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { IconBook2, IconCashBanknote } from "@tabler/icons-react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Chat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        mih="50vh"
        gap="lg"
        align="center"
        justify="center"
        direction="column"
      >
        <Title>Corpora Askbot</Title>
        <Title order={3}>Para empezar, elige un bot</Title>
        <Flex gap="lg" align="center" justify="center">
          <Button
            onClick={() => router.push("/inversores")}
            variant="outline"
            color="blue"
            leftIcon={<IconCashBanknote />}
          >
            Inversores
          </Button>
          <Button
            onClick={() => router.push("/manual")}
            variant="outline"
            color="blue"
            leftIcon={<IconBook2 />}
          >
            Manual
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
