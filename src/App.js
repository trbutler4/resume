import * as React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import {
    Box,
    Text,
    Heading,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>

        <Box className="resume-header" m={2}>
            <Heading textAlign={['center']}>Thomas Robert Butler IV</Heading>
            <Heading textAlign={['center']}>Software Engineer</Heading>
            <Text fontSize={22} textAlign={['center']}>
                <a href="mailto:trbiv@proton.me">trbiv@proton.me </a> |
                <a href="https://github.com/trbutler4"> Github</a> |
                <a href="https://www.linkedin.com/in/thomas-butler-1a435018b/"> LinkedIn</a>
            </Text>
        </Box>

        <Box className="resume-body" m={5}>

            <Heading fontSize={22} textAlign={['left']}>Education</Heading>
            <Box className="body-education" p={5} flex='1' textAlign='left'>
                <Text fontSize={18}>
                    University of Iowa, BSE Computer Science and Engineering
                </Text>
                <UnorderedList>
                    <ListItem>GPA 3.2/4.0</ListItem>
                    <ListItem><strong>Relevant Courses:</strong> Single Variable Calculus,
                        Multivariable Calculus, Matrix Algebra, Differential Equations,
                        Discrete Structures, Probability and Statistics, Linear Systems,
                        Physics I &amp; II, CS Fundamentals, Software Design, Data Structures,
                        Algorithms, Digital Design, Computer Architecture and Organization,
                        Circuits, Thermodynamics, Principles of Macroeconomics, Applied Machine
                        Learning, Theory of Computation, Software Engineering Project,
                        Senior Design Project
                    </ListItem>
                </UnorderedList>
            </Box>

            <Heading fontSize={22} textAlign={['left']}>Skills</Heading>
            <Box className="body-skills" p={5} flex='1' textAlign='left'>
                <UnorderedList>
                    <ListItem>
                        <strong>Languages: </strong>
                        Python, C, C++, Java, JavaScript, HTML, CSS, Ruby on Rails, Haskell,
                        Solidity, Rust, Go
                    </ListItem>
                    <ListItem>
                        <strong>Tools/Technologies: </strong>
                        Git/Github, AWS, Linux, Brownie, Hardhat, Foundry, React, Ethers,
                        Databases (SQL and NO-SQL), Firebase, IPFS, ENS, Infura, Metamask
                    </ListItem>
                    <ListItem>
                        <strong>Software Engineering: </strong>
                        TDD, BDD, Unit Testing, Integration Testing, CI/CD, Agile, Scrum
                    </ListItem>
                    <ListItem>
                        <strong>Interpersonal: </strong>
                        Leadership, Project Management, Communication, Time Management, Remote Work
                    </ListItem>
                </UnorderedList>
            </Box>

            <Heading fontSize={22} textAlign={['left']}>Work Experience</Heading>
            <Box className="body-work-experience" p={5} flex='1' textAlign='left'>
                <Text fontSize={18}>
                    <strong>Cloud Software Engineer Intern</strong> &ndash; <em>Thomson Reuters </em>
                </Text>
                <UnorderedList>
                    <ListItem>
                        Responsible for all stages of the software development life cycle of
                        an automated AWS cloud orphaned asset cleanup application using Python
                        and AWS Lambda with Step Functions which is projected to save the
                        Thomson Reuters $14 million initially, and reduce cloud spend over time.
                        Took ownership in all aspects of development process from ideation to
                        production implementation, including unit and integration testing,
                        CI/CD pipelines, and documentaion
                    </ListItem>
                    <ListItem>
                        Contributed to the development of an internal AWS RDS Database tool
                        that is used across all cloud teams at Thomson Reuters
                    </ListItem>
                    <ListItem>
                        Worked remotely with multipls teams across the globe
                    </ListItem>
                    <ListItem>
                        <strong>Tools Used: </strong> AWS (Lambda, Step Functions, CodePIpeline,
                            Boto3), Python
                    </ListItem>
                </UnorderedList>
            </Box>

            <Heading fontSize={22} textAlign={['left']}>Project Highlights</Heading>
            <Box className="body-projects" p={5} flex='1' textAlign='left'>
                <Text fontSize={18}>
                    <strong>Full-Stack Dapp</strong> &ndash; <em>NFTicket</em>
                </Text>
                <Text>
                    NFT event ticketing platform which allows organizers to easily create events,
                    sell tickets, and redeem tickets for events.
                </Text>
                <UnorderedList>
                    <ListItem>
                        Lead team of 4 developers to follow software engineering best practices
                    </ListItem>
                    <ListItem>
                        <strong>Tools Used: </strong> Hardhat, React, Firebase
                    </ListItem>
                </UnorderedList>

                <br/>
                <Text fontSize={18}>
                    <strong>Full-Stack Dapp</strong> &ndash; <em>Peerio</em>
                </Text>
                <Text>
                    Decentralized peer review process on filecoin network. Includes tokenized
                    voting system, with rewards tied to a users reputation.
                </Text>
                <UnorderedList>
                    <ListItem>
                        <a href="https://ethglobal.com/showcase/peerio-0bv55">
                            Hack FEVM Filecoin pool prize winner
                        </a>
                    </ListItem>
                    <ListItem>
                        <strong>Tools Used: </strong> Hardhat, React, Firebase, IPFS (Web3.storage),
                    </ListItem>
                </UnorderedList>

                <br/>
                <Text fontSize={18}>
                    <strong>Machine Learning</strong> &ndash;
                    <em> Smart Contract Vulnerability Detection</em>
                </Text>
                <Text>
                   Supervised and Unsupervised methods to detect potential vulnerabilities in
                    smart contracts.
                </Text>
                <UnorderedList>
                    <ListItem>
                        <strong>Tools Used: </strong> Python, PyTorch, Jupyter Notebook
                    </ListItem>
                </UnorderedList>
            </Box>

            <Heading fontSize={22} textAlign={['left']}>Leadership Experience and Awards</Heading>
            <Box className="body-leadership-and-awards" p={5} flex='1' textAlign='left'>
                <Text fontSize={18}>
                    <strong>Academic Chair</strong> &ndash;
                    <em> Sigma Chi Fraternity Alpha Eta Chapter</em>
                </Text>
                <Text fontSize={18}>
                    <strong>Risk Manager (Executive Board)</strong> &ndash;
                    <em> Sigma Chi Fraternity Alpha Eta Chapter</em>
                </Text>
                <Text fontSize={18}>
                    <strong>Eagle Scout </strong> &ndash;
                    <em> BSA Troop 81</em>
                </Text>
            </Box>


        </Box>
    </ChakraProvider>
  );
}

export default App;
