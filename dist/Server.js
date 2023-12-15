var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Comp1 } from "@components/Comp1";
class Server {
    constructor(port, address) {
        this.comp1 = new Comp1();
        this.port = port;
        this.address = address;
        this.date = "";
    }
    startServer() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getData();
            console.log(`Staring Server at : ${this.address} : ${this.port}`);
            return function () {
                //   date = 5;
            };
        });
    }
    stopServer() {
        console.log(`Stopping the server  at : ${this.address} : ${this.port}`);
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            return "{}";
        });
    }
}
// class DbServer extends Server {
//   constructor(port: number, address: string) {
//     super(port, address);
//     console.log(port, address);
//   }
//   stopServer(): void {
//     console.log("Stopping server");
//   }
// }
const someServer = new Server(8080, "localhost");
someServer.startServer();
someServer.stopServer();
