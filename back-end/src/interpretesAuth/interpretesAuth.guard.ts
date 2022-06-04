import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class InterpretesAuthGuard extends AuthGuard('interpretesLocal') {}
