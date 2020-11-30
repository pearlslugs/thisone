import { PrismaClient } from '@prisma/client'

export async function getStaticProps() {
    const prisma = new PrismaClient()
    const homePageContent = await prisma.post.findMany()
    return {
      props : { clients }
    }
}