import prismaClient from "../prisma";




class profileUserService {
    async execute(user_id) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        });

        return user;
    }
}

export { profileUserService }