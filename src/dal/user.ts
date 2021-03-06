import { User, UserInput, UserOutput } from '../db/models/User';

export const create = async (payload: UserInput): Promise<UserOutput> => {
    const ingredient = await User.create(payload);
    return ingredient
}

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
    const user = await User.findByPk(id);

    if (!user) {
        // @todo throw custom error
        throw new Error('not found');
    }
    const updatedUser = await (user as User).update(payload);

    return updatedUser;
}

export const getById = async (id: number): Promise<UserOutput> => {
    const user = await User.findByPk(id);

    if (!user) {
        // @todo throw custom error
        throw new Error('not found');
    }
    return user
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedUserCount = await User.destroy({ where: { id } });

    return !!deletedUserCount;
}

export const getAll = async (where?: Record<string, object>): Promise<UserOutput[]> => {
    return User.findAll({ where });
}