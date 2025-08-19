import { Info } from "lucide-react";
import { Card, CardDescription, CardDetail, CardHeader } from "../atoms";
import Link from "next/link";

export function LoginInfoCard() {
  return (
    <Card>
      <CardHeader>
        <CardDetail>
          <Info className="text-neutral-600" size={16} />
        </CardDetail>
      </CardHeader>
      <CardDescription>
        Realizar login não é obrigatório, é apenas uma recomendação devido a
        taxa de limite de requisições para IPs sem autenticação.{" "}
        <Link
          href="https://docs.github.com/pt/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28"
          target="_blank"
        >
          <i>Entenda mais*</i>
        </Link>
      </CardDescription>
    </Card>
  );
}
