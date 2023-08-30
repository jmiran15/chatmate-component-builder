import React, { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  Center,
  Flex,
  rem,
  Grid,
  Title,
  Stack,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    [theme.fn.smallerThan("lg")]: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },
    paddingLeft: rem(5),
    paddingRight: rem(5),
  },
  grid: {
    [theme.fn.smallerThan("lg")]: {
      height: "100%",
      paddingTop: rem(50),
    },
    height: "80vh",
  },
}));

export default function Landing() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Grid w="100vw" align="flex-start" className={classes.root}>
      <Grid.Col lg={6} md={12}>
        <Stack className={classes.grid} justify="center" align="flex-start">
          <Title order={1}>
            Create chatbots with multiple chat and document components
          </Title>
          <Text size="lg" color="dimmed">
            With chatmate.dev you can combine multiple gpt4 chat outputs with
            vector document retrievals to create multi-chain chatbots.
          </Text>
          <Button
            size="lg"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            onClick={() => navigate("/sign-up")}
          >
            Get started
          </Button>
        </Stack>
      </Grid.Col>
      <Grid.Col lg={6} md={12}>
        <Flex className={classes.grid} justify="center" align="flex-start">
          <iframe
            src="https://www.loom.com/embed/9c416dbfed384151af858a7d8659de8c?sid=d4c5758c-fcfe-4434-b213-ca802a53b4a5"
            title="checkmate.dev demo"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </Flex>
      </Grid.Col>
    </Grid>
  );
}
