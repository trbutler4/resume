import {
  ExperienceData,
  WorkExperience,
  OpenSourceExperience,
  Project,
  PersonalInfo,
  Education,
} from "./types";

export const DefaultPersonalInfo: PersonalInfo = {
  name: "Thomas Robert Butler IV",
  title: "Senior Software Engineer",
  email: "trbiv@proton.me",
  github: "https://github.com/trbutler4",
  linkedin: "https://www.linkedin.com/in/thomas-butler-1a435018b/",
  onlydust: "https://app.onlydust.com/u/trbutler4",
};

export const UIowaEducation: Education = {
  id: "university-iowa",
  institution: "University of Iowa",
  degree: "BSE Computer Science and Engineering",
};

// ---- Work Experience ----

export const NakamotoWorkExperience: WorkExperience = {
  id: "nakamoto-senior",
  position: "Senior Software Engineer",
  company: "Nakamoto LLC",
  duration: "January 2025 - June 2025",
  responsibilities: [
    "Supported team of two engineers to compete in Bittensor subnets.",
    "Fine-tuned tool calling LLMs to compete in Bittensor subnet 20 (BitAgent), beating SOTA models on Berkley Function Calling Leaderboard, and achieving top 10% subnet performance.",
    "Built and managed both physical and cloud server infrastructure for AI inference, combining datacenter and cloud servers into a single kubernetes cluster providing compute to Bittensor subnet 64 (Chutes). Optimized auto-scaling and resource allocation for maximum profit.",
    "Designed high performance concurrent microservice architecture in Python and Golang for scraping large amounts of Reddit, Twitter, and Youtube data for competing in Bittensor subnet 13 (Data Universe).",
    "Built a network of AI agents on twiter to compete on the bitensor Agent Arena subnet, using ElizaOS",
  ],
  tools: [
    "Python",
    "Golang",
    "Rust",
    "Linux",
    "Kubernetes",
    "Postgres",
    "Redis",
    "Docker",
    "Git/Github",
    "Huggingface",
    "AWS",
    "PyTorch",
    "NumPy",
    "Sglang",
    "Vllm",
    "AI Agents",
    "ElizaOS",
    "Daydreams",
  ],
};

export const TholosWorkExperience: WorkExperience = {
  id: "tholos-mobile",
  position: "Mobile Software Engineer",
  company: "Tholos",
  duration: "October 2023 - January 2025",
  responsibilities: [
    "Full ownership of both iOS and Android mobile applications for Tholos MPC Crypto Wallet, implemented in React Native and securing over $35 Million worth of digital assets.",
    "Worked across the entire stack, implementing complex and critical code across a multitude of systems, including websocket and aws secure enclave.",
    "Worked in a blockchain agnostic stack, supporting key management, signing, and web3 integration across numerous networks including Ethereum, the most popular EVM compatible blockchains and L2s (Polygon, Arbitrum, etc.), Bitcoin, Solana, and Cosmos ecosystem.",
    "Implemented fault-tolerant key backup and recovery mechanisms across distributed mobile devices, with redundant safeguards ensuring 100% key recovery even during network failures, device disconnects, or interrupted operations, guaranteeing secure and reliable key access in any scenario.",
  ],
  tools: [
    "React Native",
    "Native Wind",
    "Expo",
    "JavaScript/Typescript",
    "Bash",
    "Python",
    "Go",
    "Rust",
    "Postgres",
    "Redis",
    "AWS",
    "Docker",
    "Git/Github",
    "FastAPI",
  ],
};

export const SuffixLabsWorkExperience: WorkExperience = {
  id: "suffix-labs-founder",
  position: "Founder and CEO",
  company: "Suffix Labs",
  duration: "July 2023 - Present",
  responsibilities: [
    "Founded Suffix Labs LLC to provide consulting and software development services.",
    "Consulted on and wrote software for various Web3/Smart Contract related projects.",
    "Worked asynchronously with multiple fully remote teams to build frontends for crypto lending platforms, services, and communities.",
    "Run a validator for Starknet and other blockchain networks.",
  ],
  tools: [
    "React",
    "Wagmi",
    "Typescript",
    "Solidity",
    "Foundry",
    "Hardhat",
    "Slither",
    "Storybook",
    "Polygon",
    "Ethereum",
    "Chakra-UI",
    "TailwindCSS",
    "MaterialUI",
    "Chromatic",
    "Git/Github",
  ],
  status: "optional",
};

export const ETHChiWorkExperience: WorkExperience = {
  id: "ethchi-cofounder",
  position: "Co-Founder and Tech Lead",
  company: "ETHChicago",
  duration: "June 2023 - Present",
  responsibilities: [
    "Co-Founder of ETHChicago, a community built by and for the Ethereum, and greater Web3 ecosystem in the Midwest.",
    "Led the development of ETHChicago's website, integrating NFT ticketing infrastructure for 500+ attendees.",
    "Built NFT releases for the community, working with local Chicago artists and philanthropies to raise money for local charities.",
  ],
  tools: [
    "React",
    "Wagmi",
    "Typescript",
    "Solidity",
    "Foundry",
    "Hardhat",
    "Storybook",
    "Polygon",
    "Ethereum",
    "Chakra-UI",
    "TailwindCSS",
    "MaterialUI",
    "Chromatic",
    "Git/Github",
  ],
  status: "optional",
};

export const MSCWorkExperience: WorkExperience = {
  id: "maverick-software-coop",
  position: "Cloud Software Engineer",
  company: "Maverick Software Consulting -- Thomson Reuters",
  duration: "June 2021 - May 2023",
  responsibilities: [
    "Responsible for all stages of the software development life cycle of an automated AWS orphaned asset cleanup application using Python and AWS lambda with step functions which is projected to save thomson reuters $14 million initially, and reduce cloud spend over time.",
    "Took ownership in all aspects of development process from ideation to production implementation, including unit and integration testing, ci/cd pipelines, and documentaion.",
    "Contributed to the development of an internal AWS RDS database tool that is used across all cloud teams at Thomson Reuters.",
    "Worked remotely with multipls teams across the globe.",
    "Continually followed best aws best practices, and guided team of 3 other engineers in software engineering best practices.",
  ],
  tools: [
    "git/github",
    "Python",
    "AWS",
    "AWS lambda",
    "AWS step functions",
    "AWS lambda layers",
    "AWS cloudformation",
    "AWS codepipeline",
    "Github actions",
  ],
  status: "optional",
};

// ---- Open Source Experience ----

export const StarknetPhoneOpenSourceExperience: OpenSourceExperience = {
  id: "starknet-phone",
  position: "Maintainer",
  project: "Starknet Phone",
  duration: "September 2024 - Present (development paused)",
  link: "https://github.com/keep-starknet-strange/starknet-phone",
  responsibilities: [
    "Leading a Starkware Exploration Project that aims to drastically improve mobile UX and sovereignty on Starknet by implementing a fork of GrapheneOS with a light client built in, providing both trustless access to the Starknet network, and complete user control of the device, with GrapheneOS removing all 3rd party control and tracking.",
    "Modified Beerus to compile to Android, and implemented Java bindings for the light client in Rust using Android NDK and JNI.",
    "Hold weekly community calls to support contributors, sync on progress, and share project updates.",
    "Driving development for a leading project on the OnlyDust platform, maintaining the repository and supporting 15+ contributors.",
  ],
  tools: [
    "Android Studio",
    "Java",
    "Kotlin",
    "C",
    "Rust",
    "NDK",
    "JNI",
    "Git/Github",
  ],
};

export const CairoZedOpenSourceExperience: OpenSourceExperience = {
  id: "cairo-zed",
  position: "Maintainer",
  project: "Cairo Zed Extension",
  duration: "July 2024 - Present",
  link: "https://github.com/trbutler4/zed-cairo",
  responsibilities: [
    "Developed and maintain the Cairo programming language extension for the Zed text editor, with 7000+ users.",
  ],
  tools: ["Rust", "Tree-Sitter", "Language Server Protocol", "Git/Github"],
};

// ---- Project Experience ----

export const KakarotBridgeProject: Project = {
  id: "kakarot-bridge",
  name: "Kakarot Bridge",
  link: "https://github.com/trbutler4/kakarot-bridge",
  description:
    "A ERC20 token bridge enabling a 7 hour withdrawal window with almost no trust assumptions, enabled by Kakarot L2",
  achievements: ["Lambda ZK Week Hackathon (Brussels) Winner"],
  hackathonLink: "https://dorahacks.io/buidl/14125",
  tools: [
    "Solidity",
    "Hardhat",
    "Foundry",
    "Cairo",
    "Docker",
    "React",
    "Starknet React",
  ],
};

export const StarkSproutsProject: Project = {
  id: "starksprouts",
  name: "StarkSprouts",
  link: "https://github.com/StarkSprouts/StarkSprouts",
  description:
    "StarkSprouts is a fully on-chain game using the Dojo toolchain. The goal of the game is simply to grow a garden, which will slowly die, and must be watered to stay alive.",
  achievements: ["Top 10 at Starknet Hacker House Denver"],
  additionalInfo:
    "Gameplay implemented with ThreeJS, and the game was deployed on Starknet using Slot.",
  tools: ["Cairo", "Katana", "Starkli", "Dojo", "ThreeJS", "Slot"],
};

export const AISmartContractVulnerabilityProject: Project = {
  id: "ai-smart-contract-vuln",
  name: "AI Smart Contract Vulnerability Detection",
  link: "https://github.com/trbutler4/AML_Project",
  description:
    "Supervised and Unsupervised methods to detect potential vulnerabilities in smart contracts.",
  additionalInfo:
    "Methods included analyzing bytecode directly by constructing a 'sliding window' of relevant opcodes, as well converting bytecode into RGB images, both of which were analyzed using neural networks.",
  tools: ["Python", "PyTorch", "Jupyter Notebook", "Solidity", "Slither"],
};
