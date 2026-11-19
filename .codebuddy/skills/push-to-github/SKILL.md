---
name: push-to-github
description: 将本项目提交 commit 并 push 到指定的 GitHub 远程仓库 https://github.com/xiaozhaobb-0226/Zhaoshibo.git。当用户说"提交到 GitHub"、"push 到 GitHub"、"同步代码到远程仓库"或要求推送本项目代码时，使用本技能。
---

# 提交到 GitHub

本技能用于将当前项目（赵士渤全栈开发）的全部变更提交并推送到 GitHub 远程仓库 `https://github.com/xiaozhaobb-0226/Zhaoshibo.git`。

## 前置检查

1. 确认远程仓库已配置，若未配置则添加：
   ```bash
   git remote add origin https://github.com/xiaozhaobb-0226/Zhaoshibo.git
   ```
2. 确认 `.gitignore` 中包含 `node_modules/` 与 `.env`，**严禁将 `backend/.env`（数据库凭据）推送到远程仓库**。推送前用 `git status --short` 和 `git ls-files` 核查 `.env` 未被跟踪。

## 提交与推送流程

1. 暂存全部变更：`git add .`
2. 提交（本机未配置全局身份时，使用 -c 参数临时指定）：
   ```bash
   git -c user.name="Zhaoshibo" -c user.email="24001050205@qq.com" commit -m "<描述本次变更的中文信息>" --no-verify
   ```
   若本次没有任何变更（working tree clean），则跳过 commit，直接执行推送。
3. 推送（首次推送需指定上游分支）：
   ```bash
   git push -u origin main
   ```
   后续推送使用 `git push origin main`。

## 异常处理

- **认证失败**（403 / Authentication failed）：提示用户在 Windows 凭据管理器或 Git Credential Manager 中更新 GitHub 账号凭据，或使用 Personal Access Token 作为密码重新认证。
- **远程非快进（non-fast-forward）**：先执行 `git pull origin main --rebase` 合并远程变更，解决冲突后重新提交再推送；禁止使用 `--force` 强推。
- **网络超时**：等待后重试一次，仍失败则提示用户检查网络或代理设置。

## 记录要求

推送成功后，按 AGENTS.md 规则向根目录 `Zhaoshibo_prompt.md` 追加本次指令记录（时间 | 提示词全文 | 大模型名称）。
