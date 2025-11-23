import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { impressum_text } from "./app_texts";
import CodeToTextParser from "./codeToTextParser";
import React from "react";

const Impressum: React.FC = () => {

  return (
    <div
    >
      <div
        style={{
          marginTop: "env(safe-area-inset-top)",
        }}
      >
        <div className="after-login-container">
          <Card className="mb-3 margin2vw">
            <CardHeader 
              title={<Typography variant="h5">Impressum / Legal Notice</Typography>}
            />
            <CardContent>
              <CodeToTextParser code={impressum_text} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
