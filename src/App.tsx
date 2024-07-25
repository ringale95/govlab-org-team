import "./css/index.css";
import { Text } from "./components/Text/Text";

function App() {
  return (
    <>
      <Text variant="bold" as="h3" color="text-primary">
        BETH SIMONE NOVECK
      </Text>
      <Text variant="regular" as="h4" color="text-secondary">
        PROFESSOR AND DIRECTOR
      </Text>
      <Text variant="light" as="p" color="text-primary">
        Beth Simone Noveck is a professor at Northeastern University, where she
        directs the Burnes Center for Social Change and its partner project, The
        Governance Lab (The GovLab). Her newest book Democracy Rebooted: How AI
        Can Save Democracy will appear with Yale University Press. New Jersey
        Governor Phil Murphy appointed her as the state’s first Chief AI
        Strategist in 2024. Previously, she served as the NJ Chief Innovation
        Officer, founded the White House Open Government Initiative under
        President Obama, worked for 10 Downing Street, and served on Chancellor
        Angela Merkel's Digital Council. She leads InnovateUS, which trains
        public servants in AI, digital, and innovation skills and the AI for
        Impact Coop Program, where students build AI for social good. She blogs
        at rebootdemocracy.ai
      </Text>
    </>
  );
}

export default App;
