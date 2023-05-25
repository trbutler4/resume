import * as React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

function App() {
  return (
      <ChakraProvider>

        <div className="resume-header">
            <h>Thomas Robert Butler IV</h>
            <h2>Software Engineer</h2>

        </div>

        <div className="resume-body">
          <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  <h2>Education</h2>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <h3><span>University of Iowa, BSE Computer Science and Engineering</span> <span>2018 &ndash; 2023</span></h3>
                <ul>
                    <li>GPA 3.2/4.0</li>
                    <li><strong>Relevant Courses:</strong> Single Variable Calculus, Multivariable Calculus, Matrix Algebra,
                        Differential Equations, Discrete Structures, Probability and Statistics, Linear Systems,
                        Physics I &amp; II, CS Fundamentals, Software Design, Data Structures, Algorithms, Digital Design,
                        Computer Architecture and Organization, Circuits, Thermodynamics, Principles of Macroeconomics,
                        Applied Machine Learning, Theory of Computation, Software Engineering Project,
                        Senior Design Project
                    </li>
                </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Skills
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <ul>
                    <li><strong>Languages:</strong> Python, C, C++, Java, JavaScript, Ruby on Rails, Haskell, Solidity,
                     Rust (learning), Go (learning)</li>
                    <li><strong>Tools/Technologies:</strong> Git/Github, AWS, Linux, Brownie, Hardhat, Foundry, React, Ethers,
                     Databases (SQL and NoSQL), Firebase, Docker, IPFS, ENS, Infura, Metamask</li>
                    <li><strong>Software Engineering:</strong> TDD, BDD, Unit testing, Integration Testing, Agile, Scrum, CI/CD</li>
                    <li><strong>Interpersonal:</strong> Leadership, Project Management, Communication</li>
                </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Work Experience
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <h3><span>Software Engineering Coop, Maverick Software Consulting/Thomson Reuters</span> <span>June 2021 &ndash; May 2023</span></h3>
                <ul>
                    <li>Responsible for all stages of the software development life cycle of an automated AWS cloud orphaned asset
                     cleanup application using Python and AWS Lambda with Step Functions which is projected to save the client $14 million initially.
                     and reduce cloud spend over time, took ownership in all aspects of development process from ideation to production
                     implementation, including unit and integration testing, CI/CD pipelines, and documentaion</li>
                    <li>Contributed to the development of an internal AWS RDS Database tool that is used across all the clients cloud teams.</li>
                    <li>Worked remotely with team members across multiple different time zones.</li>
                    <li><strong>Tools Used:</strong> AWS (Lambda, Step Functions, CodePipeline, Boto3 API), Python, Github.</li>
                </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Projects
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <h3><span>Full-Stack Dapp - NFTicket</span></h3>
                    <p>NFT event ticketing platform which allows organizers to easily create events, sell NFT tickets,
                        and redeem tickets for event access
                    </p>
                    <ul>
                        <li>Lead team of 4 developers to follow software engineering best practices</li>
                        <li>Includes react front end, with firebase + smart contract back end </li>
                        <li><strong>Tools used:</strong> JavaScript, Solidity, React, Hardhat, Firebase, React</li>
                    </ul>

                <br/>
                <h3><span>Full-Stack Dapp - Peerio</span></h3>
                    <p>Decentralized peer review process on filecoin network. Includes tokenized voting system, with rewards tied
                        to a users reputation
                    </p>
                    <ul>
                        <li><a href="https://ethglobal.com/showcase/peerio-0bv55">Hack FEVM Filecoin pool prize winner</a></li>
                        <li><strong>Tools used:</strong> JavaScript, Solidity, React, Hardhat, Firebase, Filecoin, IPFS</li>
                    </ul>

            <br/>
            <h3><span>Machine Learning - Smart Contract Vulnerability Detection</span></h3>
                <p>Supervised and Unsupervised methods to detect potential vulnerabilities in smart contracts
                    - Supervised: Smart contract bytecode compiled to simplified opcodes, &ldquo;sliding window&rdquo; view created with opcode
                    bigrams. Trained with neural network.
                    - Unsupervised: Smart contract bytecode converted to RGB images, K-Means clustering to detect
                    vulnerabilities
                </p>
            <ul>
                <li><strong>Tools used:</strong> Python, PyTorch, Jupyter Notebook, Hugging Face Datasets</li>
            </ul>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Leadership and Awards
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <h3><span>Sigma Chi Fraternity Alpha Eta Chapter, Academic Chair</span> <span>Spring 2018 &ndash; Spring 2019</span></h3>
                <h3><span>Sigma Chi Fraternity Alpha Eta Chapter, Risk Manager (Executive Board)</span> <span>Spring 2019 &ndash; Spring 2020</span></h3>
                <h3><span>BSA Troop 81, Eagle Scout</span> <span>Winter 2017</span></h3>
                <ul>
                <li>Earning the rank of Eagle Scout involved planning, fundraising, and executing a large-scale service project for the
                DuPage County forest preserve in Illinois, totalling well over 100 volunteer hours, and over a year of planning</li>
                </ul>
            </AccordionPanel>
          </AccordionItem>

      </Accordion>
      </div>

      </ChakraProvider>
  );
}

export default App;
