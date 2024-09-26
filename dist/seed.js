"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var bcryptjs_1 = require("bcryptjs");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var hashedPassword1, hashedPassword2, ubicacion1, ubicacion2, roleAdmin, roleUser, especialidadCardiologia, obraSocial123, usuario1, usuario2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcryptjs_1.default.hash('password123', 10)];
                case 1:
                    hashedPassword1 = _a.sent();
                    return [4 /*yield*/, bcryptjs_1.default.hash('password456', 10)];
                case 2:
                    hashedPassword2 = _a.sent();
                    return [4 /*yield*/, prisma.ubicacion.create({
                            data: {
                                calle: 'Calle Falsa',
                                numero: '123',
                                codigo_postal: '12345',
                                ciudad: 'Ciudad Falsa',
                                provincia: 'Provincia Falsa',
                            },
                        })];
                case 3:
                    ubicacion1 = _a.sent();
                    return [4 /*yield*/, prisma.ubicacion.create({
                            data: {
                                calle: 'Calle Verdadera',
                                numero: '456',
                                codigo_postal: '54321',
                                ciudad: 'Ciudad Real',
                                provincia: 'Provincia Real',
                            },
                        })];
                case 4:
                    ubicacion2 = _a.sent();
                    return [4 /*yield*/, prisma.roles.create({
                            data: {
                                nombre: 'ADMIN',
                            },
                        })];
                case 5:
                    roleAdmin = _a.sent();
                    return [4 /*yield*/, prisma.roles.create({
                            data: {
                                nombre: 'USER',
                            },
                        })];
                case 6:
                    roleUser = _a.sent();
                    return [4 /*yield*/, prisma.especialidad.create({
                            data: {
                                nombre: 'Cardiología',
                            },
                        })];
                case 7:
                    especialidadCardiologia = _a.sent();
                    return [4 /*yield*/, prisma.obraSocial.create({
                            data: {
                                nombre: 'Obra Social 123',
                            },
                        })];
                case 8:
                    obraSocial123 = _a.sent();
                    return [4 /*yield*/, prisma.usuario.create({
                            data: {
                                tipo_documento: 'DNI',
                                numero_documento: '12345678',
                                nombre: 'Juan',
                                apellido: 'Perez',
                                correo_electronico: 'juan.perez@example.com',
                                numero_telefono: '123456789',
                                ubicacion: {
                                    connect: { id: ubicacion1.id },
                                },
                                contrasena: hashedPassword1,
                                UsuarioRoles: {
                                    create: {
                                        rol: {
                                            connect: { id: roleAdmin.id },
                                        },
                                    },
                                },
                            },
                        })];
                case 9:
                    usuario1 = _a.sent();
                    return [4 /*yield*/, prisma.usuario.create({
                            data: {
                                tipo_documento: 'DNI',
                                numero_documento: '87654321',
                                nombre: 'Maria',
                                apellido: 'Gomez',
                                correo_electronico: 'maria.gomez@example.com',
                                numero_telefono: '987654321',
                                ubicacion: {
                                    connect: { id: ubicacion2.id },
                                },
                                contrasena: hashedPassword2,
                                UsuarioRoles: {
                                    create: {
                                        rol: {
                                            connect: { id: roleUser.id },
                                        },
                                    },
                                },
                            },
                        })];
                case 10:
                    usuario2 = _a.sent();
                    // Crear médicos con la especialidad
                    return [4 /*yield*/, prisma.medico.create({
                            data: {
                                usuario: {
                                    connect: { id: usuario1.id },
                                },
                                tipo_matricula: 'nacional',
                                numero_matricula: 'MAT1234',
                                especialidad: {
                                    connect: { id: especialidadCardiologia.id },
                                },
                                descripcion: 'Especialista en cardiología con 10 años de experiencia.',
                                ubicacion: {
                                    connect: { id: ubicacion1.id },
                                },
                            },
                        })];
                case 11:
                    // Crear médicos con la especialidad
                    _a.sent();
                    // Crear pacientes con la obra social
                    return [4 /*yield*/, prisma.paciente.create({
                            data: {
                                usuario: {
                                    connect: { id: usuario2.id },
                                },
                                fecha_nacimiento: new Date('1990-05-20'),
                                lugar_nacimiento: 'Ciudad Real',
                                contacto_emergencia: 'Juan Gomez',
                                obra_social: {
                                    connect: { id: obraSocial123.id },
                                },
                                FichaMedica: {
                                    create: {
                                        alergias: 'Polen, Mariscos',
                                        diagnostico: 'Hipertensión',
                                        tratamientos: 'Medicamento diario',
                                        medicamentos_recetados: 'Enalapril',
                                    },
                                },
                                ubicacion: {
                                    connect: { id: ubicacion2.id },
                                },
                            },
                        })];
                case 12:
                    // Crear pacientes con la obra social
                    _a.sent();
                    // Crear ficha médica
                    return [4 /*yield*/, prisma.fichaMedica.create({
                            data: {
                                paciente: {
                                    connect: { id: usuario2.id },
                                },
                                alergias: 'Polen, Mariscos',
                                diagnostico: 'Hipertensión',
                                tratamientos: 'Medicamento diario',
                                medicamentos_recetados: 'Enalapril',
                            },
                        })];
                case 13:
                    // Crear ficha médica
                    _a.sent();
                    console.log('Seeding completed successfully!');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
