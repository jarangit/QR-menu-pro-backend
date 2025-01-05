import { LoggerService } from "@nestjs/common";
import "colors";
export declare class EmojiLogger implements LoggerService {
    log(message: string): void;
    error(message: string, trace: string): void;
    warn(message: string): void;
    debug(message: string): void;
    private writeToFile;
}
