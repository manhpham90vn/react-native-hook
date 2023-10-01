import Example1 from "./example/example1";
import Example2 from "./example/example2";
import Example3 from "./example/example3";
import Example4 from "./example/example4";
import Example5 from "./example/example5";
import Example6 from "./example/example6";
import Example7 from "./example/example7";
import Example8 from "./example/example8";
import Example9 from "./example/example9";
import {ThemeProvider} from "./example/Context/ThemeContext";
import Example10 from "./example/example10";
import {AuthProvider} from "./example/Context/AuthContext";
import Example11 from "./example/example11";
import {SessionProvider} from "./example/Context/SessionContext";

export default function App() {
  return (
      <AuthProvider>
          <ThemeProvider>
              <SessionProvider>
                  <Example11 />
              </SessionProvider>
          </ThemeProvider>
      </AuthProvider>
  )
}
