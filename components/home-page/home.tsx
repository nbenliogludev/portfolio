import { useEffect, useState } from 'react';
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import { MotionBox, MotionFlex } from 'components/shared/animations/motion';
import Header from 'components/shared/header';
import NextLink from 'next/link';
import { useLinkColor } from 'components/theme';
import PopularArticles from './PopularArticles';
import { BlogPostProps } from 'interfaces/interface';
import { FaLinkedin, FaGithub, FaTwitter, FaMedium, FaEnvelope } from 'react-icons/fa'; // Import the icons


const ANIMATION_DURATION = 0.5;
const ORANGE = '#ff9400';
const emojis = ['👋', '👍', '🖐'];

const Home: React.FC<BlogPostProps> = (props) => {
  const { posts } = props;
  const linkColor = useLinkColor();
  const [showEmogi, setShowEmoji] = useState(false);
  const [emojiCounter, setEmojiCounter] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (emojiCounter >= 3) setEmojiCounter(0);
    }, 500);
    return () => clearInterval(interval);
  }, [emojiCounter]);

  return (
    <Flex direction="column" align="center">
      <Flex direction={['column', 'column', 'row']}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, 'auto']}
        >
          <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
            <Avatar
              size={'2xl'}
              showBorder={true}
              borderColor={linkColor}
              src={'/assets/images/user_icon.png'}
            />
          </MotionBox>
        </MotionBox>
        <MotionFlex
          position="relative"
          ml={['auto', 'auto', 16]}
          m={['auto', 'initial']}
          w={['90%', '85%', '80%']}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Box position="relative">
            <Box position="absolute" width="full" fontSize="2xl" textAlign="center">
              {emojis.map((item, index) => {
                return (
                  <MotionBox
                    key={index}
                    position="absolute"
                    right="80%"
                    animate={showEmogi && emojiCounter === index ? 'show' : 'hide'}
                    variants={{
                      hide: { translateY: -80, opacity: 0 },
                      show: {
                        translateY: [0, -40, -60],
                        opacity: [0, 1, 0]
                      }
                    }}
                    initial="hide"
                  >
                    {item}
                  </MotionBox>
                );
              })}
            </Box>
            <MotionBox whileHover={{ translateY: -5 }} width="90vw">
              <Header
                underlineColor={ORANGE}
                emoji="👋"
                mt={0}
                cursor="pointer"
                width="max-content"
                onClick={() => {
                  setEmojiCounter((prevCounter) => prevCounter + 1);
                  setShowEmoji(true);
                }}
              >
                Hey!
              </Header>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{' '}
            <Box as="strong" fontWeight="600">
              Nikolay
            </Box>{' '}
            and I&apos;m a{' '}
            <Box as="span" whiteSpace="pre-line">
              Full Stack Developer specializing in&nbsp;
            </Box>{' '}
            <Box as="span" whiteSpace="pre-line">
              backend development with Java Spring Boot&nbsp;
            </Box>{' '}
            and&nbsp;
            <Box as="span" whiteSpace="pre-line">
              frontend development with Next.js and TypeScript.&nbsp;
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
            This is my digital garden, where I write about the things I&apos;m working on and share
            what I&apos;ve learned. 😊
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
        zIndex={1}
      >
        <Box mt={10}>
          <ContentBox linkColor={linkColor} />
          <PopularArticles posts={posts} />
        </Box>
      </MotionBox>
    </Flex>
  );
};

const socialNetworks = [
  { text: 'LinkedIn', link: 'https://www.linkedin.com/in/nikolay-benlioglu/', showNewTag: false, icon: FaLinkedin },
  { text: 'GitHub', link: 'https://github.com/nbenliogludev', showNewTag: false, icon: FaGithub },
  { text: 'Twitter', link: 'https://x.com/nbenlioglu_', showNewTag: false, icon: FaTwitter },
  { text: 'Medium', link: 'https://medium.com/@nbenliogludev', showNewTag: false, icon: FaMedium },
  { text: 'Email', link: 'mailto:nikbenlioglu@gmail.com', showNewTag: false, icon: FaEnvelope },
];

const ContentBox = ({ linkColor }) => {
  return (
    <Stack
      mb={10}
      mx={[0, 0, 10]} // Responsive horizontal margin
      padding={4}
      align="center"
      borderLeft="4px solid"
      borderRight="4px solid"
      borderColor={linkColor}
      color="whatsapp"
      _hover={{ shadow: 'lg' }}
      backgroundColor={useColorModeValue('gray.100', '#1e2533')}
      rounded="sm"
      fontSize="md"
    >
      <Flex direction={['column', 'column', 'row']} textAlign="left" paddingLeft={[0, 0, 5]} align="center">
        {socialNetworks.map((network, index) => (
          <NextLink key={index} href={network.link} passHref>
            <Link
              color={linkColor}
              mx={2}
              display="flex"
              alignItems="center"
              mb={[2, 2, 0]} // Responsive margin bottom
            >
              <Box as={network.icon} size="20px" />
              <Text ml={2}>{network.text}</Text>
              {network.showNewTag && (
                <Badge ml={1} colorScheme="green">
                  New
                </Badge>
              )}
            </Link>
          </NextLink>
        ))}
      </Flex>
    </Stack>
  );
};

export default Home;
