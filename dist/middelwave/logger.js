"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmojiLogger = void 0;
require("colors");
class EmojiLogger {
    log(message) {
        this.writeToFile("📢 " + message.green);
    }
    error(message, trace) {
        this.writeToFile("❌ " + message.red);
        this.writeToFile("🔍 Stack Trace: " + trace);
    }
    warn(message) {
        this.writeToFile("⚠️ " + message.yellow);
    }
    debug(message) {
        this.writeToFile("🐞 " + message.blue);
    }
    writeToFile(message) {
        console.log(message);
    }
}
exports.EmojiLogger = EmojiLogger;
//# sourceMappingURL=logger.js.map