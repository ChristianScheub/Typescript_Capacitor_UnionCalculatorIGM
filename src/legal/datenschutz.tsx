import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { datenschutz_text } from "./app_texts";
import CodeToTextParser from "./codeToTextParser";

const Datenschutz: React.FC = () => {

  return (
    <div    >
      <div
        style={{
          marginTop: "env(safe-area-inset-top)",
        }}
      >
        <div className="after-login-container">
          <Card className="mb-3 margin2vw">
            <CardHeader 
              title={<Typography variant="h5">Infos</Typography>}
            />
            <CardContent>
              <CodeToTextParser code={datenschutz_text} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
