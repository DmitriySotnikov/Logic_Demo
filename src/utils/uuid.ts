import { v4 } from 'uuid';

export function genId(): string {
    return v4()
}