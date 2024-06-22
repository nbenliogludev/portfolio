import * as React from 'react'
import {
  FiPackage,
  FiHome,
  FiEdit2,
  FiUsers
} from 'react-icons/fi'
import { FaTools } from 'react-icons/fa'
import { VStack, Heading, Box, Link, LinkProps } from '@chakra-ui/react'
import { TimelineItem } from './Timeline'
import { PageSlideFade } from 'components/shared/animations/page-transitions'
import Header from 'components/shared/header'
import NextLink from 'next/link'
import { useLinkColor } from 'components/theme'
import { MdWork } from "react-icons/md";
import { TbSchoolOff } from "react-icons/tb";

interface ExternalLinkProps extends LinkProps {
  url: string
  linkProps?: LinkProps
  text: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  )
}

const Achievements = () => {
  const linkColor = useLinkColor()

  return (
    <PageSlideFade>
      <Box textAlign="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2024
          </Heading>
          <Box>
            <TimelineItem icon={FiHome} >
              Built my portfolio website with {' '}
              <ExternalLink
                color={linkColor}
                url="https://nextjs.org"
                text={'Next.js'}
                target="_blank"
              />
              {' '}
              and {' '}
              <ExternalLink
                color={linkColor}
                url="https://v2.chakra-ui.com/"
                text={'Chakra UI'}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FaTools}>
              Learnt{' '}
              <ExternalLink
                color={linkColor}
                url="https://www.typescriptlang.org"
                text={'Typescript'}
                target="_blank"
              />
              and{' '}
              <ExternalLink
                color={linkColor}
                url="https://nextjs.org"
                text={'Next.js'}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiUsers}>Mastered the art of tweeting {' '} 🐦</TimelineItem>
            <TimelineItem icon={FiPackage} skipTrail>
              Started a fullstack bootcamp {' '}
            </TimelineItem>
            <TimelineItem icon={FaTools}>
              Learnt{' '}
              <ExternalLink
                color={linkColor}
                url="https://www.oracle.com/java/"
                text={'Java'}
                target="_blank"
              />{' '}
              and{' '}
              <ExternalLink
                color={linkColor}
                url="https://spring.io/projects/spring-boot"
                text={'Spring Boot'}
                target="_blank"
              />
              {' '} ☕
            </TimelineItem>
          </Box>
        </Box>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2023
          </Heading>
          <Box>
            <TimelineItem icon={FiEdit2}>Wrote 4 blog posts on Medium</TimelineItem>
            <TimelineItem icon={MdWork}>
              Began working as a Frontend Developer {' '}
            </TimelineItem>
            <TimelineItem icon={TbSchoolOff} >
              Successfully passed all exams
            </TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  )
}

export default Achievements
