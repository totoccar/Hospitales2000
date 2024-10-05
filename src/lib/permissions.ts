// Definición de permisos para las rutas
export function getPermission(pathname: string): string | null {

  const routePermissions: Record<string, string> = {
    '/admin/create/doctor': 'admin:access',
    '/admin/create/patient': 'admin:access',
    '/admin/create/secretary': 'admin:access',
    '/password/recover': 'common:access',
    '/password/recover/new/[id]': 'common:access',
    '/password/change': 'common:access',
    '/search/patient': 'medsec:access',
    '/search/doctor': 'medsec:access',
    '/search/secretary': 'admin:access',
    '/view/doctor/[id]': 'adsec:access',
    '/view/secretary/[id]': 'adsec:access',
    '/view/patient/[id]': 'medsec:access',
    '/view/medicalrecord/[id]': 'medico:access',
    '/selectrole': 'common:access',
    '/403': 'common:access',
  };

  return routePermissions[pathname] || null;  // Si no se encuentra, retorna null
}


// Verifica si el rol tiene acceso a un permiso
export function hasPermission(role: string, permission: string): boolean {
  const rolePermissions: Record<string, string[]> = {
    'Administrador': ['admin:access', 'adsec:access', 'common:access'],
    'Medico': ['medico:access', 'medsec:access', 'common:access'],
    'Secretaria': ['secretaria:access', 'medsec:access', 'adsec:access', 'common:access'],
    'Paciente': ['paciente:access', 'common:access'],
  };

  const permissions = rolePermissions[role] || [];
  return permissions.includes(permission); // Retorna true si el rol tiene el permiso
}
