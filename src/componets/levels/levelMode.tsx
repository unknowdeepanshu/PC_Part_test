function LevelMode({ Levels }: { Levels: string }) {
  const levelParagraph = [
    {
      level: "Easy",
      paragraph:
        "Technology has become a part of everyday life. People use smartphones, computers, and the internet for work, study, and entertainment. Learning new skills online is easier than ever because there are many free resources available. Reading books, watching tutorials, and practicing regularly can help anyone improve. Success does not happen overnight, but consistent effort leads to progress. Small daily improvements can create significant results over time. Staying focused, avoiding distractions, and maintaining a positive attitude are important habits. Every challenge is an opportunity to learn something new and become better than before.",
    },
    {
      level: "Medium",
      paragraph:
        "Building a successful project requires patience, planning, and continuous learning. Many beginners expect instant results, but real growth comes from consistent practice and problem solving. When starting a new project, it is important to define clear goals and break large tasks into smaller steps. This approach makes the work easier to manage and helps maintain motivation throughout the process. Technology changes rapidly, and developers must adapt by learning new tools and techniques. Reading documentation, experimenting with code, and participating in communities can improve technical skills significantly. Mistakes are a natural part of learning and should be viewed as valuable experiences rather than failures. Each error provides an opportunity to understand systems more deeply and discover better solutions. Time management also plays a major role in productivity. Creating a schedule and prioritizing important tasks can prevent unnecessary stress. Regular breaks help maintain concentration and reduce fatigue during long working sessions. By combining discipline, curiosity, and persistence, anyone can achieve meaningful progress in their personal or professional goals. The journey may be challenging at times, but the knowledge and experience gained along the way make the effort worthwhile.",
    },
    {
      level: "Hard",
      paragraph:
        "The rapid advancement of technology has transformed the way people communicate, learn, and conduct business. Over the past few decades, digital tools have become increasingly integrated into daily life, allowing individuals to access information, collaborate with others, and solve complex problems more efficiently than ever before. While these innovations have created countless opportunities, they have also introduced new challenges that require careful consideration and adaptability. One of the most significant benefits of modern technology is the ability to connect people across vast distances. Through video conferencing platforms, instant messaging applications, and collaborative workspaces, teams can work together regardless of their physical location. This has enabled businesses to expand globally and has provided individuals with access to educational and professional opportunities that were once limited by geography. Students can attend online courses, professionals can work remotely, and entrepreneurs can reach customers around the world with minimal infrastructure. However, the increasing reliance on technology also highlights the importance of digital literacy. Individuals must learn how to evaluate information critically, protect their personal data, and use online resources responsibly. The internet contains an enormous amount of valuable knowledge, but it also includes misinformation that can spread rapidly. Developing strong research skills and verifying sources are essential practices for navigating the digital landscape effectively. In addition to technical knowledge, problem-solving skills remain highly valuable. Software developers, engineers, designers, and business professionals frequently encounter situations that require creative thinking and persistence. Complex challenges rarely have immediate solutions, and success often depends on the willingness to experiment, learn from mistakes, and refine ideas through repeated iteration. This mindset encourages continuous improvement and helps individuals adapt to changing circumstances. Another important aspect of personal growth is effective time management. Modern technology provides countless distractions, including social media notifications, entertainment platforms, and endless streams of content. While these tools can be enjoyable, excessive use may reduce productivity and hinder progress toward important goals. Establishing priorities, creating structured schedules, and maintaining healthy habits can help individuals remain focused and productive. Collaboration and communication are equally important in today's interconnected world. Successful projects often involve diverse teams with different perspectives and areas of expertise. Clear communication helps prevent misunderstandings, improves efficiency, and fosters a positive working environment. Listening carefully to others and providing constructive feedback can strengthen teamwork and lead to better outcomes. Ultimately, achieving long-term success requires a combination of technical skills, adaptability, discipline, and a willingness to learn. Technology will continue to evolve, creating new opportunities and challenges for future generations. Those who embrace lifelong learning, remain curious, and consistently work toward their goals will be better prepared to thrive in an increasingly digital world. Progress may sometimes seem slow, but steady effort, thoughtful planning, and resilience can produce remarkable results over time.",
    },
  ];
  const selectedPara = levelParagraph.find((para) => para.level === Levels);
  return (
    <>
      {selectedPara ?
        <p className="text-start pl-2 pr-2 h-50 overflow-auto">
          {selectedPara.paragraph}
        </p>
      : null}
    </>
  );
}

export default LevelMode;
