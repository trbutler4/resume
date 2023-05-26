import * as React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import {
    Box,
    Text,
    Heading,
    UnorderedList,
    ListItem,
    Link,
} from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>

        <Box className="resume-header" m={2}>
            <Heading textAlign={['center']}>Thomas Robert Butler IV</Heading>
            <Heading textAlign={['center']}>Software Engineer</Heading>
            <Text fontSize={22} textAlign={['center']}>
                <Link href="mailto:trbiv@proton.me" color='blue.500'>trbiv@proton.me </Link> |
                <Link href="https://github.com/trbutler4" color='blue.500'> Github</Link> |
                <Link href="https://www.linkedin.com/in/thomas-butler-1a435018b/" color='blue.500'> LinkedIn</Link>
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
                        Linux, Git/Github, AWS, Brownie, Hardhat, Foundry, React, Ethers,
                        Databases (SQL and NO-SQL), APIs, Firebase, IPFS, ENS, Infura, Metamask
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
                    <strong>Software Engineer</strong> &ndash; <em> Ethereum Chicago (May 2023 - Present)</em>
                </Text>
                <UnorderedList>
                    <ListItem>
                        Volunteer software engineer for Ethereum Chicago core team, contributing
                        to building out the Ethereum ecosystem in Chicago.
                    </ListItem>
                    <ListItem>
                        Spearhead deployment of
                         <Link href="https://forum.ethchicago.xyz/" color='blue.500'> forum.ethchicago.xyz</Link>
                        , a Discourse server for contributors to the Ethereum Chicago community.
                    </ListItem>
                    <ListItem>
                        Collaborate with other Ethereum Chicago core team members to develop
                        infrastructure, including website, NFT ticketing, and other technical aspects
                        of the participant experience.
                    </ListItem>
                </UnorderedList>

                <br/>
                <Text fontSize={18}>
                    <strong>Intern</strong> &ndash; <em> Serval Ventures (March 2022 - Present)</em>
                </Text>
                <Text>
                    Serval Ventures is an early stage venture buillder, investor, and innovation
                    partner focusing on AI, data, mixed reality, and blockchain.
                </Text>
                <UnorderedList>
                    <ListItem>
                        Worked closely with founders of various AI and Blockchain focused
                        startups to develop and implement business strategies.
                    </ListItem>
                    <ListItem>
                        Founding member of a stealth proprietary AI investment fund.
                    </ListItem>
                </UnorderedList>

                <br/>
                <Text fontSize={18}>
                    <strong>Cloud Software Engineer Intern</strong> &ndash;
                    <em> Thomson Reuters (June 2021 - May 2023)</em>
                </Text>
                <UnorderedList>
                    <ListItem>
                        Responsible for all stages of the software development life cycle of
                        an automated AWS cloud orphaned asset cleanup application using Python
                        and AWS Lambda with Step Functions which is projected to save the
                        Thomson Reuters $14 million initially, and reduce cloud spend over time.
                        Took ownership in all aspects of development process from ideation to
                        production implementation, including unit and integration testing,
                        CI/CD pipelines, and documentaion.
                    </ListItem>
                    <ListItem>
                        Contributed to the development of an internal AWS RDS Database tool
                        that is used across all cloud teams at Thomson Reuters.
                    </ListItem>
                    <ListItem>
                        Worked remotely with multipls teams across the globe.
                    </ListItem>
                    <ListItem>
                        <strong>Tools Used: </strong> AWS (Lambda, Step Functions, CodePIpeline,
                            Boto3), Python
                    </ListItem>
                </UnorderedList>

                <br/>
                <Text fontSize={18}>
                    <strong>Network Engineer Intern</strong> &ndash;
                    <em> Arias Information Solutions (June 2020 - December 2020)</em>
                </Text>
                <UnorderedList>
                    <ListItem>
                        Conducted field inventory of the Illinois Tollway fiber optic communication
                        system including network equipment at toll plazas, fiber termination
                        points, and cable/conduit routing.
                    </ListItem>
                    <ListItem>
                        Using data collected in the field, led updates of fiber network diagrams
                        using Microsoft Visio. Collaborated with Tollway network staff, field
                        technicians, and engineers to ensure the accuracy and consistency of the diagrams.
                    </ListItem>
                    <ListItem>
                        Analyzed 200+ pages of different technical plans and spreadsheets to
                        establish fiber and IoT device connectivity while working remotely.
                    </ListItem>
                </UnorderedList>

                <br/>
                <Text fontSize={18}>
                    <strong>Software Engineer Intern</strong> &ndash;
                    <em> Parsons Corporation (June 2019 - August 2019)</em>
                </Text>
                <UnorderedList>
                    <ListItem>
                        Contributed to the development of the Illinois Tollway Advanced Traffic
                        Management System (ATMS).
                    </ListItem>
                    <ListItem>
                        Performed field investigations and oversight of fiber optic communication
                        system overhaul in the city of Chicago, collaborating with representatives
                        from CDOT, DEO, and OEMC.
                    </ListItem>
                    <ListItem>
                        Responsible for implementation of Illinois Tollway employee management
                        software. Provided technical support after the implementation.
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
                        Lead team of 4 developers to follow software engineering best practices.
                    </ListItem>
                    <ListItem>
                        Fully tested Metamask integration using Cypress and Synpress.
                    </ListItem>
                    <ListItem>
                        <strong>Tools Used: </strong> Hardhat, React, Firebase, Infura, Cypress,
                            Synpress
                    </ListItem>
                </UnorderedList>

                <br/>
                <Text fontSize={18}>
                    <strong>Full-Stack App</strong> &ndash; <em>Curate</em>
                </Text>
                <Text>
                    Full stack web application that leverages Spotify and Apple music APIs to
                    allow users to curate playlists, post them to the platform, like and comment
                    on playlists, follow users, and upload/export playlists to and from Spotify
                    and Apple Music.
                </Text>
                <UnorderedList>
                    <ListItem>
                        Includes CI/CD pipelines, PR templates, and branch protections
                    </ListItem>
                    <ListItem>
                        Fully documented project wiki, detailing all aspects of the project
                    </ListItem>
                    <ListItem>
                        <strong>Tools Used: </strong> React, Firebase, Node, Cypress
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
                        <Link href="https://ethglobal.com/showcase/peerio-0bv55" color='blue.500'>
                            Hack FEVM Filecoin pool prize winner
                        </Link>
                    </ListItem>
                    <ListItem>
                        <strong>Tools Used: </strong> Hardhat, React, Firebase, IPFS (Web3.storage)
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
