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
          <Link href="https://app.onlydust.com/u/trbutler4" color='blue.500'> OnlyDust</Link> |
          <Link href="https://www.linkedin.com/in/thomas-butler-1a435018b/" color='blue.500'> LinkedIn</Link>
        </Text>
      </Box>

      <Box className="resume-body" m={5}>

        {/* Work Experience */}
        <Heading fontSize={22} textAlign={['left']}>Work Experience</Heading>
        <Divider />
        <Box className="body-work-experience" p={5} flex='1' textAlign='left'>

          <Text fontSize={18}>
            <strong>Mobile Engineer</strong> &ndash; <em> Tholos (October 2023 - Present)</em>
          </Text>
          <UnorderedList>
            <ListItem>
              Full ownership of both iOS and Android mobile applications for
              Tholos MPC Crypto Wallet, implemented in React Native and 
              securing over $12 Million worth of digital assets.
            </ListItem>
            <ListItem>
              Worked across the entire stack where needed, implementing complex 
              and critical code across a multitude of systems.
            </ListItem>
            <ListItem>
              Wrote and update documentation on development processes, built tools and scripts to increase the teams 
              speed and simplicity of development.
            </ListItem>
            <ListItem>
              Worked in a blockchain agnostic stack, supporting key management, signing, and web3 integration across numerous networks including Ethereum, the most popular EVM compatible blockchains and L2s (Polygon, Arbitrum, etc.), Bitcoin, Solana, and Cosmos ecosystem.
            </ListItem>
            <ListItem>
              Fully remote team, spanning 2 countries and 3 timezones.
            </ListItem>
            <ListItem>
              <strong>Tools Used: </strong> React Native, Native Wind, expo, JavaScript/Typescript, Bash, Python, Go, Rust, Postgres, Redis, AWS (Secure Enclave, API Gateway, Lambda), Docker, Git/Github
            </ListItem>
          </UnorderedList>

          <br />
          <Text fontSize={18}>
            <strong>Founder</strong> &ndash; <em> Suffix Labs (July 2023 - Present)</em>
          </Text>
          <UnorderedList>
            <ListItem>
              Founded Suffix Labs LLC to provide consulting and software development services.
            </ListItem>
            <ListItem>
              Consulted on and wrote software for various Web3/Smart Contract related projects.
            </ListItem>
            <ListItem>
              Worked asynchronously with multiple fully remote teams to build frontends for crypto lending platforms, services, and communities.
            </ListItem>
            <ListItem>
              <strong>Tools Used: </strong> React, Wagmi, Typescript, Solidity, Foundry, Hardhat, Slither, Storbybook, Polygon, Ethereum,
              Chakra-UI, TailwindCSS, MaterialUI, Chromatic, Git/Github
            </ListItem>
          </UnorderedList>

          <br />
          <Text fontSize={18}>
            <strong>Co-Founder/Software Engineer</strong> &ndash; <em> ETHChicago (May 2023 - Present)</em>
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
              NFT ticketing process for 500+ ateendees. The website is hosted on IPFS via Fleek.
            </ListItem>
            <ListItem>
              Lead a team of 3 designers to enahnce the user experience and aesthetics of
              the website, which has been visited over 10000 times in a single month.
            </ListItem>
            <ListItem>
              <strong>Tools Used: </strong> React, Typescript, Storbybook, Arbitrum, Chakra-UI,
              Unlock Protocol, Gnosis Safe, Git, Github, Wagmi, Feek, IPFS, ENS
            </ListItem>
          </UnorderedList>
        </Box>

        {/* Open Source Experience */}
        <Heading fontSize={22} textAlign={['left']}>Open Source Experience</Heading>
        <Divider />
        <Box className="body-work-experience" p={5} flex='1' textAlign='left'>

          <Text fontSize={18}>
            <strong>Maintainer/Software Engineer</strong> &ndash; <em> Starknet Phone (September 2024 - Present) - </em>
            <Link href="https://github.com/keep-starknet-strange/starknet-phone" color='blue.500'>Github</Link>
          </Text>
          <UnorderedList>
            <ListItem>
              Leading a Starkware Exploration Project that aims to drastically improve mobile UX and sovereignty on Starknet by implementing a fork of GrapheneOS with a
              light client built in, providing both trustless access to the Starknet network, and complete user control of the device, with GrapheneOS removing 
              the need for any 3rd party control and tracking.
            </ListItem>
            <ListItem>
              Hold weekly community calls to support contributors, sync on progress, and share project updates.
            </ListItem>
            <ListItem>
              Driving development for a leading project on the OnlyDust platform, maintaining the repository and supporting 15+ contributors.
            </ListItem>
            <ListItem>
              <strong>Tools Used: </strong> Android Studio, Java, Kotlin, Rust, Git/Github
            </ListItem>
          </UnorderedList>

          <br />
          <Text fontSize={18}>
            <strong>Maintainer/Software Engineer</strong> &ndash; <em> Cairo Zed Extension (July 2024 - Present) - </em>
            <Link href="https://github.com/trbutler4/zed-cairo" color='blue.500'>Github</Link>
          </Text>
          <UnorderedList>
            <ListItem>
              Developed and maintain the Cairo programming language extension for the Zed text editor, with 79+ installs. 
            </ListItem>
            <ListItem>
              <strong>Tools Used: </strong> Rust, Tree-Sitter, Language Server Protocol, Git/Github
            </ListItem>
          </UnorderedList>

        </Box>

        {/* Projects */}
        <Heading fontSize={22} textAlign={['left']}>Project Highlights</Heading>
        <Divider />
        <Box className="body-projects" p={5} flex='1' textAlign='left'>
          <Text fontSize={18}>
            <strong>Kakarot Bridge - </strong>
            <Link href="https://github.com/trbutler4/kakarot-bridge" color='blue.500'>Github</Link>
          </Text>
          <UnorderedList>
            <ListItem>
              Lambda ZK Week Hackathon (Brussels) Winner:
              <Link href="https://dorahacks.io/buidl/14125" color='blue.500'> Hackathon Submission</Link>
            </ListItem>
            <ListItem>
              A ERC20 token bridge enabling a 7 hour withdrawal window with almost no trust assumptions, enabled by Kakarot L2
            </ListItem>
            <ListItem>
              <strong>Tools Used: </strong>Solidity, Hardhat, Cairo, Docker, React, Starknet React
            </ListItem>
          </UnorderedList>

          <br />
          <Text fontSize={18}>
            <strong>StarkSprouts - </strong>
            <Link href="https://github.com/StarkSprouts/StarkSprouts" color='blue.500'>Github</Link>
          </Text>
          <UnorderedList>
            <ListItem>
              Top 10 at Starknet Hacker House Denver.
            </ListItem>
            <ListItem>
              StarkSprouts is a fully on-chain game using the Dojo toolchain. The goal of the game is simply to grow a garden, which will slowly die, and must be watered to stay alive.
            </ListItem>
            <ListItem>
              Gameplay implemented with ThreeJS, and the game was deployed on Starknet using Slot.
            </ListItem>
            <ListItem>
              <strong>Tools Used: </strong> Cairo, Katana, Starkli, Dojo, ThreeJS, Slot
            </ListItem>
          </UnorderedList>

          <br />
          <Text fontSize={18}>
            <strong>ZK Credit Proofs - </strong>
            <Link href="https://github.com/trbutler4/ethchi2023_hackathon" color='blue.500'>Github</Link>
          </Text>
          <UnorderedList>
            <ListItem>
              POC of using Polygon ID to issue credentials for an individuals credit score, and submit a ZK proof that
              their credit score is above a certain threshold to prevent the need for sharing SSN with the leasing compnany.
            </ListItem>
            <ListItem>
              <strong>Tools Used: </strong> Go, Polygon ID, NGROK, React
            </ListItem>
          </UnorderedList>

          <br />
          <Text fontSize={18}>
            <strong>NFTicket: NFT Ticketing Platform</strong> &ndash; <em><Link href="https://github.com/trbutler4/NFTicket" color="blue.500">Github</Link></em>
          </Text>
          <UnorderedList>
            <ListItem>
              NFT event ticketing platform which allows organizers to easily create events,
              sell tickets, and redeem tickets for events.
            </ListItem>
            <ListItem>
              Lead team of 4 developers to follow software engineering best practices.
            </ListItem>
            <ListItem>
              Fully tested Metamask integration using Cypress and Synpress.
            </ListItem>
            <ListItem>
              <strong>Tools Used: </strong> Solidity, Hardhat, React, Firebase, Infura, Cypress,
              Synpress
            </ListItem>
          </UnorderedList>

          {/*
          <br />
          <Text fontSize={18}>
            <strong>Full-Stack App</strong> &ndash; <em><Link href="https://github.com/sep-23/team_01/wiki" color="blue.500">Curate</Link></em>
          </Text>
          <UnorderedList>
            <ListItem>
              Full stack web application that leverages Spotify and Apple music APIs to
              allow users to curate playlists, post them to the platform, like and comment
              on playlists, follow users, and upload/export playlists to and from Spotify
              and Apple Music.
            </ListItem>
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
            */}

          <br />
          <Text fontSize={18}>
            <strong>Peerio: Decentralized Peer Review Process</strong> &ndash; <em><Link href="https://github.com/brandonsurh/peerio" color="blue.500">Github</Link></em>
          </Text>
          <UnorderedList>
            <ListItem>
              Decentralized peer review process on filecoin network. Includes tokenized
              voting system, with rewards tied to a users reputation.
            </ListItem>
            <ListItem>
              <Link href="https://ethglobal.com/showcase/peerio-0bv55" color='blue.500'>
                Hack FEVM Filecoin pool prize winner
              </Link>
            </ListItem>
            <ListItem>
              <strong>Tools Used: </strong> Solidity, Hardhat, React, Firebase, IPFS, Web3.Storage
            </ListItem>
          </UnorderedList>

          <br />
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
              <strong>Tools Used: </strong> Verilog HDL, ModelSim
            </ListItem>
          </UnorderedList>

          <br />
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

          <br />
          <Text fontSize={18}>
            <strong>Machine Learning</strong> &ndash;
            <em> Smart Contract Vulnerability Detection</em>
          </Text>
          <UnorderedList>
            <ListItem>
              Supervised and Unsupervised methods to detect potential vulnerabilities in
              smart contracts.
            </ListItem>
            <ListItem>
              Methods included analyzing bytecode directly by contructing a
              'sliding window' of relevant opcodes, as well converting bytecode into RGB images,
              both of which were analyzed using neural networks.
            </ListItem>
            <ListItem>
              <strong>Tools Used: </strong> Python, PyTorch, Jupyter Notebook, Solidity, Slither
            </ListItem>
          </UnorderedList>
        </Box>

        <Heading fontSize={22} textAlign={['left']}>Education</Heading>
        <Divider />
        <Box className="body-education" p={5} flex='1' textAlign='left'>
          <Text fontSize={18}>
            University of Iowa, BSE Computer Engineering
          </Text>
        </Box>

        {/*
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
          */}

      </Box>
    </ChakraProvider>
  );
}

export default App;
