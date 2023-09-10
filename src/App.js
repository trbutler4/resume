import * as React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import {
    Box,
    Text,
    Heading,
    UnorderedList,
    ListItem,
    Link,
    Divider
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
            {/*
            <Text padding={4}>
                Thomas Robert Butler IV is a dedicated and skilled Software Engineer with a passion for innovation and 
                expertise in a wide range of technologies. He holds a BSE degree in Computer Science and Engineering from 
                the University of Iowa and has experience in full-stack development, cloud computing, machine learning, 
                and blockchain technologies. 
                Thomas is most at home in front of a Linux terminal, and has a strong proficiency in multiple programming 
                languages and tools, including Python, C++, Java, Solidity,
                Git/Github, and AWS. With his commitment to continuous learning and a drive for staying at the forefront of 
                industry trends, Thomas is well-equipped to excel in dynamic software engineering roles.
            </Text>
            */}
        </Box>

        <Box className="resume-body" m={5}>

            <Heading fontSize={22} textAlign={['left']}>Education</Heading>
            <Divider />
            <Box className="body-education" p={5} flex='1' textAlign='left'>
                <Text fontSize={18}>
                    University of Iowa, BSE Computer Engineering
                </Text>
                <UnorderedList>
                    <ListItem>GPA 3.2/4.0</ListItem>
                </UnorderedList>
            </Box>

            <Heading fontSize={22} textAlign={['left']}>Relevant Skills</Heading>
            <Divider />
            <Box className="body-skills" p={5} flex='1' textAlign='left'>
                <UnorderedList>
                    <ListItem>
                        <strong>Languages: </strong>
			C, C++, Assembly, VHDL
                    </ListItem>
                    <ListItem>
                        <strong>Relevant Tools/Technologies: </strong>
                    </ListItem>
                    <ListItem>
                        <strong>Software Engineering: </strong>
                        TDD, BDD, Unit Testing, Integration Testing, CI/CD, Agile, Scrum
                    </ListItem>
                    {/*
                    <ListItem>
                        <strong>Interpersonal: </strong>
                        Leadership, Project Management, Communication, Time Management, Remote Work
                    </ListItem>
                    */}
                </UnorderedList>
            </Box>

            {/* Work Experience */}
            <Heading fontSize={22} textAlign={['left']}>Work Experience</Heading>
            <Divider />
            <Box className="body-work-experience" p={5} flex='1' textAlign='left'>
                <br/>
                <Text fontSize={18}>
                    <strong>Software Engineer</strong> &ndash; <em> ETHChicago (May 2023 - Present)</em>
                </Text>
                <UnorderedList>
                    <ListItem>
                        Volunteer software engineer for Ethereum Chicago core team, Collaborated and coordinated 
                        efforts with ETHChicago ecosystem to ensure
                        seamless integration and synergy across various elements of the Ethereum community in Chicago.
                    </ListItem>
                    <ListItem>
                        Spearhead deployment of
                         <Link href="https://forum.ethchicago.xyz/" color='blue.500'> forum.ethchicago.xyz</Link>
                        , a Discourse server for contributors to the Ethereum Chicago community.
                    </ListItem>
                    <ListItem>
                        Independently, with feedback from Unlock protocol team and ETHChicago core team,
                        built and launched 
                         <Link href="https://ethchicago.xyz/" color='blue.500'> ethchicago.xyz </Link>
                        including the NFT ticketing infrastructure, providing a seamless 
                        NFT ticketing process for all ateendees. The website is hosted on IPFS via Fleek.
                    </ListItem>
                    <ListItem>
                        Currently leading a team of 3 designers to enahnce the user experience and aesthetics of 
                        the website.
                    </ListItem>
                    <ListItem>
                        As a signer on the Gnosis Safe, managed transactions and treasury on both Arbitrum and 
                        Ethereum.
                    </ListItem>
                    <ListItem>
                        <strong>Tools Used: </strong> React, Typescript, Storbybook, Arbitrum, Chakra-UI, 
                            Unlock Protocol, Gnosis Safe, Git, Github, Wagmi, Feek, IPFS, ENS
                    </ListItem>
                </UnorderedList>

                <br/>
                <Text fontSize={18}>
                    <strong>Cloud Software Engineering Coop</strong> &ndash;
                    <em> Thomson Reuters (June 2021 - May 2023)</em>
                </Text>
                <UnorderedList>
                    <ListItem>
                        Responsible for all stages of the software development life cycle of
                        an automated AWS cloud orphaned asset cleanup application using Python
                        and AWS Lambda with Step Functions which is projected to save
                        Thomson Reuters $14 million initially, and reduce cloud spend over time.
                    </ListItem>
                    <ListItem>
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
                        Continually followed best AWS best practices, and guided team of 3 other
                        engineers in software engineering best practices.
                    </ListItem>
                    <ListItem>
                        <strong>Tools Used: </strong> AWS (Lambda, Step Functions, CodePIpeline,
                            Boto3), Python
                    </ListItem>
                </UnorderedList>

                <br/>
                <Text fontSize={18}>
                    <strong>Open Source Contributions</strong> 
                </Text>
                <UnorderedList>
                    <ListItem>
                       <strong>TurbETH - </strong>Integrated Unlock Protocol NFT gated memberships into TurboETH. This included a component
                        to create locks, a paywall, and components to display owned keys, created locks, and lock
                        information by querying The Graph. 
                    </ListItem>
                    <ListItem>
                        <strong>Cairo Book - </strong>General typo fixes and improvements to the Cairo programming language documentaion
                    </ListItem>
                    <ListItem>
                        <strong>Kakarot - </strong>Implemented Opcodes for the Kakarot EVM written in Cairo.
                    </ListItem>
                    <ListItem>
                        <strong>Tools Used: </strong> React, Typescript, Wagmi, Unlock Protocol, The Graph, Cairo, Git, Github
                    </ListItem>
                </UnorderedList>


            </Box>

            {/* Projects */}
            <Heading fontSize={22} textAlign={['left']}>Project Highlights</Heading>
            <Divider />
            <Box className="body-projects" p={5} flex='1' textAlign='left'>
                <Text fontSize={18}>
                    <strong>Starkfish</strong> &ndash;
                    <em> Proveable Chess Engine</em>
                </Text>
                <UnorderedList>
                    <ListItem>
                        Starkfish is a proveable chess engine, including move generation, evaluation, and search, 
			written in Cairo for deployment to Starknet. Cairo is a turing-complete STARK-friendly CPU architecture.
                    </ListItem>
                    <ListItem>
                        Includes frontend created with starknet-react and nextjs to play against the engine.
                    </ListItem>
                    <ListItem>
                        <strong>Tools USed: </strong> Cairo, Katana, Starkli, Starknet, Starknet-react, NextJs
                    </ListItem>
                </UnorderedList>

                <br/>
                <Text fontSize={18}>
                    <strong>Computer Architecture</strong> &ndash;
                    <em> SISC Computer</em>
                </Text>
                <UnorderedList>
                    <ListItem>
                        Built and tested SISC computer processor.
                    </ListItem>
                    <ListItem>
                        Wrote machine code programs that correctly execute on the computer.
                    </ListItem>
                    <ListItem>
                        <strong>Tools Used: </strong> VHDL, ModelSim, FPGA
                    </ListItem>
                </UnorderedList>

                <br/>
                <Text fontSize={18}>
                    <strong>Embedded System</strong> &ndash;
                    <em> Live Crypto Price Display Board</em>
                </Text>
                <UnorderedList>
                    <ListItem>
                        Embedded system that display the live prices of Bitcoin and Ethereum. Includes a push 
                        button to swap between the different cryptocurrencies, and an alarm if the price crashes. 
                    </ListItem>
                    <ListItem>
                        Python script to interact with API to retrieve live prices for Bitcoin and Ethereum, and send 
                        serially to arduino via bluetooth module. 
                    </ListItem>
                    <ListItem>
                        Arduino microcontroller with LED display module, bluetooth module, buzzer, and push button. 
                    </ListItem>
                    <ListItem>
                        <strong>Tools Used: </strong>Python, C, Arduino, Atmel Studio
                    </ListItem>
                </UnorderedList>

                <br/>
                <Text fontSize={18}>
                    <strong>Algorithmic Trading</strong> &ndash;
                    <em> Basic Strategies</em>
                </Text>
                <UnorderedList>
                    <ListItem>
                        Gathers stock market data via API requests
                    </ListItem>
                    <ListItem>
                        Uses stock market data to create an equal weight S&P 500 index fund, as well as quantitative value-based
                        and momentum-based investing strategies.
                    </ListItem>
                    <ListItem>
                        <strong>Tools Used: </strong> Python, Pandas, Jupyter Notebook
                    </ListItem>
                </UnorderedList>
            </Box>

            <Heading fontSize={22} textAlign={['left']}>Leadership Experience and Awards</Heading>
            <Divider />
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
