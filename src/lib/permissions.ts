// Definición de permisos para las rutas
export function getPermission(pathname: string): string | null {
 
    const routePermissions: Record<string, string> = {
      '/admin/create/doctor': 'admin:access',// Solo Administrador
      '/dashboard': 'medico:access',        // Solo Médicos
      '/search/patient': 'secretaria:access',     // Secretarios pueden acceder
      '/my-profile': 'paciente:access',     // Solo Pacientes
      '/selectrole': 'common:access',       // Acceso común a todos
      '/403': 'common:access',              // Acceso común a todos
    };
  
    return routePermissions[pathname] || null;  // Si no se encuentra, retorna null
  }
  
  // Verifica si el rol tiene acceso a un permiso
  export function hasPermission(role: string, permission: string): boolean {
    const rolePermissions: Record<string, string[]> = {
      'Administrador': ['admin:access', 'medico:access', 'secretaria:access', 'paciente:access'],
      'Medico': ['medico:access', 'paciente:access'],
      'Secretaria': ['secretaria:access', 'paciente:access'],
      'Paciente': ['paciente:access'],
    };
  
    const permissions = rolePermissions[role] || [];
    return permissions.includes(permission); // Retorna true si el rol tiene el permiso
  }
  