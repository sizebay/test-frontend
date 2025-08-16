import { Info } from "lucide-react";
import { Card, CardDescription, CardDetail, CardHeader } from "../atoms";

export function LoginInfoCard() {
  return (
    <Card>
      <CardHeader>
        <CardDetail>
          <Info className="text-neutral-600" size={16} />
        </CardDetail>
      </CardHeader>
      <CardDescription>
        O login não é necessário, apenas é recomendado no caso de diversos usos
        devido ao limite de requisições da api do <i>Github</i>
      </CardDescription>
    </Card>
  );
}
