export class TimeInput {
    constructor(public desc: string,
                public project: string,
                public tag: string,
                public billable: boolean,
                public timeFrom,
                public timeTo,
                public date,
                public timeCounted) {
    }
}
