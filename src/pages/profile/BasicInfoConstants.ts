export interface IEditBtnActions {
    [-1]: string,
    0: string,
    1: string,
    2: string,
    3: string,
    5: string,
    6: string,
    7: string,

    [key: string]: string;
}

export interface IPrintInput {
    id: number,
    name: string,
    placeholder: string,
}
export const editBtnActions: IEditBtnActions = {
    [-1]: 'cansel or nothing',
    0: 'name',
    1: 'gender',
    2: 'location',
    3: 'birthday',
    5: 'gitHub',
    6: 'linkedIn',
    7: 'twitter',
}

export const printInputs: IPrintInput[] = [
    {
        id: 0,
        name: 'name',
        placeholder: 'Your name',
    },
    {
        id: 1,
        name: 'gender',
        placeholder: 'Your gender',
    },
    {
        id: 2,
        name: 'location',
        placeholder: 'Your location',
    },
    {
        id: 3,
        name: 'birthday',
        placeholder: 'Your birthday',
    },
    {
        id: 5,
        name: 'gitHub',
        placeholder: 'Your Github username or url',
    },
    {
        id: 6,
        name: 'linkedIn',
        placeholder: 'Your LinkedIn username or url',
    },
    {
        id: 7,
        name: 'twitter',
        placeholder: 'Your Twitter username or url',
    },
]