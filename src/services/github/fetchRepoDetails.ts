import axios from "axios";
import { RepoDetail } from "@/types/github";

export async function fetchRepoDetails(owner: string, repo: string): Promise<RepoDetail> {
    const res = await axios.get(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: {
            Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
    });
    return res.data;
}
