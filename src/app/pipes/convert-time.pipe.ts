import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform{
    transform(value: number): string {
        const hour: number = Math.floor(value / 3600);
        const min: number = Math.floor(value % 3600 / 60);
        const sec: number = Math.floor(value % 3600 % 60);
        return hour.toString().padStart(2, '0') +
            ':' + min.toString().padStart(2, '0') +
            ':' + sec.toString().padStart(2, '0');
    }
}



