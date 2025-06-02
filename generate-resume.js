#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

class ResumeGenerator {
  constructor() {
    this.experienceData = null;
    this.config = null;
  }

  loadData() {
    try {
      const dataPath = path.join(__dirname, "experience-data.json");
      this.experienceData = JSON.parse(fs.readFileSync(dataPath, "utf8"));
    } catch (error) {
      console.error("Error loading experience data:", error);
      process.exit(1);
    }
  }

  loadConfig(configType) {
    try {
      const configPath = path.join(__dirname, "configs", `${configType}.json`);
      this.config = JSON.parse(fs.readFileSync(configPath, "utf8"));
    } catch (error) {
      console.error(`Error loading config for ${configType}:`, error);
      process.exit(1);
    }
  }

  generateHeader() {
    const { personalInfo } = this.experienceData;
    const title = this.config.title || personalInfo.title;

    return `
        <header class="resume-header">
            <h1>${personalInfo.name} - ${title}</h1>
            <div class="contact-info">
                <a href="mailto:${personalInfo.email}">${personalInfo.email}</a> |
                <a href="${personalInfo.github}">Github</a> |
                <a href="${personalInfo.linkedin}">LinkedIn</a>
            </div>
        </header>`;
  }

  generateWorkExperience() {
    if (
      !this.config.workExperience ||
      !this.config.workExperience.include.length
    ) {
      return "";
    }

    const experiences = this.config.workExperience.include
      .map((id) =>
        this.experienceData.workExperience.find((exp) => exp.id === id),
      )
      .filter((exp) => exp)
      .sort((a, b) => {
        const orderA = this.config.workExperience.order.indexOf(a.id);
        const orderB = this.config.workExperience.order.indexOf(b.id);
        return orderA - orderB;
      });

    let html = `
        <section class="section">
            <h3 class="section-title">Work Experience</h3>
            <hr class="divider" />
            <div class="section-content">`;

    experiences.forEach((exp) => {
      if (
        exp.status === "optional" &&
        this.config.resumeType !== "blockchain"
      ) {
        return;
      }

      html += `
                <div class="job-title">
                    <strong>${exp.position}</strong> –
                    <em>${exp.company} (${exp.duration})</em>
                </div>
                <ul>`;

      exp.responsibilities.forEach((resp) => {
        html += `<li>${this.emphasizeText(resp)}</li>`;
      });

      html += `
                    <li>
                        <strong>Tools Used:</strong> ${exp.tools.join(", ")}
                    </li>
                </ul>`;
    });

    html += `
            </div>
        </section>`;

    return html;
  }

  generateOpenSourceExperience() {
    if (
      !this.config.openSourceExperience ||
      !this.config.openSourceExperience.include.length
    ) {
      return "";
    }

    const experiences = this.config.openSourceExperience.include
      .map((id) =>
        this.experienceData.openSourceExperience.find((exp) => exp.id === id),
      )
      .filter((exp) => exp)
      .sort((a, b) => {
        const orderA = this.config.openSourceExperience.order.indexOf(a.id);
        const orderB = this.config.openSourceExperience.order.indexOf(b.id);
        return orderA - orderB;
      });

    const limit = this.config.openSourceExperience.limit || experiences.length;
    const limitedExperiences = experiences.slice(0, limit);

    let html = `
        <section class="section">
            <h3 class="section-title">Open Source Experience</h3>
            <hr class="divider" />
            <div class="section-content">`;

    limitedExperiences.forEach((exp) => {
      html += `
                <div class="job-title">
                    <strong>${exp.position}</strong> –
                    <em>${exp.project} (${exp.duration}) - </em>
                    <a href="${exp.link}">Github</a>
                </div>
                <ul>`;

      exp.responsibilities.forEach((resp) => {
        html += `<li>${this.emphasizeText(resp)}</li>`;
      });

      html += `
                    <li>
                        <strong>Tools Used:</strong> ${exp.tools.join(", ")}
                    </li>
                </ul>`;
    });

    html += `
            </div>
        </section>`;

    return html;
  }

  generateProjects() {
    if (!this.config.projects || !this.config.projects.include.length) {
      return "";
    }

    const projects = this.config.projects.include
      .map((id) => this.experienceData.projects.find((proj) => proj.id === id))
      .filter((proj) => proj)
      .sort((a, b) => {
        const orderA = this.config.projects.order.indexOf(a.id);
        const orderB = this.config.projects.order.indexOf(b.id);
        return orderA - orderB;
      });

    const limit = this.config.projects.limit || projects.length;
    const limitedProjects = projects.slice(0, limit);

    let html = `
        <section class="section">
            <h3 class="section-title">Project Highlights</h3>
            <hr class="divider" />
            <div class="section-content">`;

    limitedProjects.forEach((proj) => {
      html += `
                <div class="job-title">
                    <strong>${proj.name} - </strong>
                    <a href="${proj.link}">Github</a>
                </div>
                <ul>`;

      if (proj.achievements && proj.achievements.length > 0) {
        proj.achievements.forEach((achievement) => {
          let achievementHtml = `<li>${this.emphasizeText(achievement)}`;
          if (proj.hackathonLink) {
            achievementHtml += `: <a href="${proj.hackathonLink}">Hackathon Submission</a>`;
          }
          achievementHtml += `</li>`;
          html += achievementHtml;
        });
      }

      html += `<li>${this.emphasizeText(proj.description)}</li>`;

      if (proj.additionalInfo) {
        html += `<li>${this.emphasizeText(proj.additionalInfo)}</li>`;
      }

      html += `
                    <li>
                        <strong>Tools Used:</strong> ${proj.tools.join(", ")}
                    </li>
                </ul>`;
    });

    html += `
            </div>
        </section>`;

    return html;
  }

  generateEducation() {
    if (!this.config.education || !this.config.education.include.length) {
      return "";
    }

    const education = this.config.education.include
      .map((id) => this.experienceData.education.find((edu) => edu.id === id))
      .filter((edu) => edu);

    let html = `
        <section class="section">
            <h3 class="section-title">Education</h3>
            <hr class="divider" />
            <div class="education-content">`;

    education.forEach((edu) => {
      html += `${edu.institution}, ${edu.degree}`;
    });

    html += `
            </div>
        </section>`;

    return html;
  }

  emphasizeText(text) {
    if (!this.config.emphasize) return text;

    let emphasizedText = text;

    // Emphasize keywords
    if (this.config.emphasize.keywords) {
      this.config.emphasize.keywords.forEach((keyword) => {
        const regex = new RegExp(`\\b${keyword}\\b`, "gi");
        emphasizedText = emphasizedText.replace(
          regex,
          `<strong>${keyword}</strong>`,
        );
      });
    }

    // Emphasize metrics
    if (this.config.emphasize.metrics) {
      this.config.emphasize.metrics.forEach((metric) => {
        if (emphasizedText.includes(metric)) {
          emphasizedText = emphasizedText.replace(
            metric,
            `<strong>${metric}</strong>`,
          );
        }
      });
    }

    return emphasizedText;
  }

  generateSections() {
    const sectionGenerators = {
      workExperience: () => this.generateWorkExperience(),
      openSourceExperience: () => this.generateOpenSourceExperience(),
      projects: () => this.generateProjects(),
      education: () => this.generateEducation(),
    };

    return this.config.sectionsOrder
      .map((sectionName) => sectionGenerators[sectionName]())
      .filter((section) => section.trim() !== "")
      .join("\n");
  }

  generateHTML() {
    const header = this.generateHeader();
    const sections = this.generateSections();

    return `<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../global.css" />
        <title>Resume - ${this.experienceData.personalInfo.name}</title>
    </head>
    <body>
        ${header}

        <main>
            ${sections}
        </main>
    </body>
</html>`;
  }

  generate(configType, outputPath) {
    this.loadData();
    this.loadConfig(configType);

    const html = this.generateHTML();

    if (outputPath) {
      fs.writeFileSync(outputPath, html);
      console.log(`Resume generated: ${outputPath}`);
    } else {
      console.log(html);
    }
  }
}

// CLI Usage
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.log("Usage: node generate-resume.js <config-type> [output-file]");
    console.log("Available configs: blockchain, ai-ml, mobile, full-stack");
    process.exit(1);
  }

  const configType = args[0];
  const outputPath = args[1] || `resume-${configType}.html`;

  const generator = new ResumeGenerator();
  generator.generate(configType, outputPath);
}

module.exports = ResumeGenerator;
