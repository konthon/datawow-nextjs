# Datawow assignment - Frontend - NextJS

## ภาพรวม

NextJS (page router) + GraphQL

ไม่มีการทำ git flow เนื่องจากเป็น assignment ครับ

### Libraries

- GraphQL - connect backend APIs with fully typed
- tanstack/query - query caching
- Chakra UI v3 - styling all components
  - components inside `components/ui/*` folder comes from Chakra CLI generated
- zustand - state management e.g. dialog states

### Structure

ผมเลือกใช้ Page router ในการสร้างหน้าแต่ละหน้า โดยมี page extension `.page.tsx` ระบุไฟล์ของหน้านั้น และสร้าง components ที่ใช้เฉพาะหน้านั้นๆ ได้สะดวกใน folder ได้เลยครับ

- components folder - ใช้เก็บ global components ที่ใช้ร่วมกัน
  - `components/ui` มาจากการ generate ของ Chakra CLI เพื่อตั้งต้น base component ใน version 3
- GraphQL folder - เก็บ graphQL queries/mutation ที่ต้องการใช้งาน
  - `_generated.ts` เป็นไฟล์ที่ถูกสร้างหลังจาก graphql-codegen แปลงจาก graphql files เป็น typescript สำหรับใช้ในโปรเจ็คต่อ
    - ใช้คำสั่ง `npm run graphql:generate` ในการสร้างไฟล์นี้
- hooks folder - เก็บ react hooks ที่ไว้ใช้ร่วมกัน
- layouts folder - เก็บ layout components
- libs folder
  - graphql-codegen - graphQL codegen configuration file
  - graphql-request - base client request function for calling graphQL query/mutation wrapped with SDK from graphql-codegen
- pages folder - หน้าแต่ละหน้าของโปรเจ็คนี้
- queries folder - ตัวตั้งต้น queries ของ tanstack/query เพื่อใช้ร่วมกันทั้งโปรเจ็ค และสะดวกต่อการ manage queries เช่น การ invalidate queries เป็นต้น
- shared folder - รวม constants และ utility functions ที่ใช้ร่วมกันได้
- styles folder - สำหรับกำหนด base UI ของ Chakra UI โดยในที่นี้มีการ custom ในส่วนของสี และ components บางส่วน

### Expected Improvements

เนื่องจากมีเวลาจำกัด ผมมีสิ่งที่คิดไว้เพิ่มเติม เพื่อให้โปรเจ็คนี้สมบูรณ์มากยิ่งขึ้นครับ

- cache pages โดยวิธี SSG หรือเปลี่ยนไปใช้ app router ของ nextJS เพื่อเพิ่มประสิทธิภาพการแสดงผล content และ SEO
- จัดการ/refactor base styles ของ Chakra UI ให้ดีกว่านี้
- เพิ่ม lint ให้มีมาตรฐาน (code standard) ยิ่งขึ้น

## ขั้นตอนการติดตั้ง

### Requirements

- `NodeJS` v18 ขึ้นไป (LTS)
- `NPM` for Package Manager

### การติดตั้ง

1. ลง dependencies ของโปรเจ็คนี้

```bash
npm install
```

> [!IMPORTANT]
> รันโปรเจ็คหลังบ้าน (datawow-nestjs) ก่อน

2. รันโปรเจ็ค

```bash
npm run dev
```

3. เปิด http://localhost:3000 เพื่อเริ่มการใช้งาน
