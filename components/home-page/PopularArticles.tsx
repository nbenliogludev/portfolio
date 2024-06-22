import React from 'react'
import { BlogPostProps } from 'interfaces/interface'
import {
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  Tooltip,
  useColorModeValue,
  Flex,
  SimpleGrid
} from '@chakra-ui/react'
import NextLink from 'next/link'
import moment from 'moment'
import { useLinkColor } from 'components/theme'
import Header from '../shared/header'
import { CardTransition } from 'components/shared/animations/page-transitions'
import { MotionBox } from 'components/shared/animations/motion'
import { getDbPosts } from 'lib/fetchPosts'
import { CommentIcon, HeartIcon } from 'components/shared/icons'
import DisplayText from 'components/shared/icons/DisplayText'

const ORANGE = '#ff9400'

const PopularArticles: React.FC<BlogPostProps> = (props) => {
  const { posts } = props
  const { dbPosts, isLoading } = getDbPosts()
  const linkColor = useLinkColor()
  const textColor = useColorModeValue('gray.500', 'gray.200')

  const compare = (
    a: { public_reactions_count: number },
    b: { public_reactions_count: number }
  ) => {
    const countA = a.public_reactions_count
    const countB = b.public_reactions_count

    let comparison = 0
    if (countA < countB) {
      comparison = 1
    } else if (countA > countB) {
      comparison = -1
    }
    return comparison
  }

  const getPostLikes = (slug) => {
    const p = dbPosts?.filter((p) => p.slug === slug)[0]
    return p?.likes || 0
  }

  return (
    <VStack align="start" spacing={8} width="100%">
      <Header underlineColor={ORANGE} mt={0} mb={0}>
        Articles
      </Header>
      <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
        {posts &&
          posts
            ?.sort(compare)
            .slice(0, 3)
            .map(
              (
                {
                  link,
                  title,
                  slug,
                  positive_reactions_count,
                  comments_count,
                  pubDate,
                },
                i
              ) => (
                <MotionBox whileHover={{ y: -5 }} key={i}>
                  <CardTransition>
                    <VStack
                      spacing={1}
                      p={4}
                      _hover={{ shadow: 'md', textDecoration: 'none' }}
                      borderWidth="1px"
                      position="relative"
                      rounded="md"
                      bg={useColorModeValue('white', 'gray.800')}
                      align="left"
                    >
                      <HStack justifyContent="space-between" isInline>
                        <Heading fontSize="lg" textAlign="left" mt={0}>
                          <NextLink href={link} passHref>
                            <Text as={Link} color={linkColor}>
                              {title}
                            </Text>
                          </NextLink>
                        </Heading>
                        <HStack
                          spacing={2}
                          isInline
                          display={['none', 'flex', 'flex']}
                        >
                          {positive_reactions_count ? (
                            <Flex alignItems="center">
                              <DisplayText
                                isLoading={isLoading}
                                value={
                                  Number(positive_reactions_count) +
                                  getPostLikes(slug)
                                }
                              />
                              &nbsp;
                              <HeartIcon />
                            </Flex>
                          ) : (
                            ''
                          )}
                          {comments_count ? (
                            <Flex alignItems="center">
                              <DisplayText
                                isLoading={false}
                                value={comments_count}
                              />
                              &nbsp;
                              <CommentIcon />
                            </Flex>
                          ) : (
                            ''
                          )}
                        </HStack>
                      </HStack>
                      <HStack spacing={2} isInline>
                        <Tooltip hasArrow label="Published" placement="top">
                          <Text
                            fontSize="sm"
                            fontWeight="600"
                            color={textColor}
                          >
                            {moment(pubDate).format('Do MMMM YYYY')}
                          </Text>
                        </Tooltip>
                        {positive_reactions_count ? (
                          <Tooltip hasArrow label="Reactions" placement="top">
                            <Flex
                              alignItems="center"
                              display={['flex', 'none', 'none']}
                            >
                              <DisplayText
                                isLoading={isLoading}
                                value={
                                  Number(positive_reactions_count) +
                                  getPostLikes(slug)
                                }
                              />
                              &nbsp;
                              <HeartIcon />
                            </Flex>
                          </Tooltip>
                        ) : (
                          ''
                        )}
                        {comments_count ? (
                          <Tooltip hasArrow label="Comments" placement="top">
                            <Flex
                              alignItems="center"
                              display={['flex', 'none', 'none']}
                            >
                              <DisplayText
                                isLoading={false}
                                value={comments_count}
                              />
                              &nbsp;
                              <CommentIcon />
                            </Flex>
                          </Tooltip>
                        ) : (
                          ''
                        )}
                      </HStack>
                      {/* <Text
                        align="left"
                        fontSize="md"
                        noOfLines={1}
                        color={textColor}
                      >
                        {link}
                      </Text> */}
                    </VStack>
                  </CardTransition>
                </MotionBox>
              )
            )}
      </SimpleGrid>
    </VStack>
  )
}

export default PopularArticles
