# Work Together — Frontend

This is the **frontend** of the **Work Together** platform, built using [Next.js 15](https://nextjs.org), [React 19](https://react.dev), and [Tailwind CSS 4](https://tailwindcss.com/). It serves as the user interface for job collaboration features, integrating seamlessly with the [Work Together Backend](https://github.com/martinsalinas0/wt-backend-ts) via a RESTful API.

## 🚀 Tech Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- TypeScript 5
- Axios
- React Icons

## 📦 Installation

```bash
git clone https://github.com/martinsalinas0/work-together-frontend-v2.git
cd work-together-frontend-v2
npm install
# or
yarn
```

Create a `.env.local` file with:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

## 🧪 Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🗂️ Project Structure

```
work-together-frontend-v2/
├── app/
├── components/
├── lib/
├── public/
├── styles/
```

## ✨ Features

- Job listings UI
- REST API integration
- Fully responsive
- Tailwind CSS

## 🛠 Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## 🚀 Deployment

Deploy via [Vercel](https://vercel.com/). Set `NEXT_PUBLIC_API_BASE_URL` in the dashboard.

## 🧾 License

MIT License

## 👤 Author

[martinsalinas0](https://github.com/martinsalinas0)
