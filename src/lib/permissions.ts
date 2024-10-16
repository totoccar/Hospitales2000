
export function getPermission(pathname: string): string | null {

  if (pathname.startsWith('/view/doctor')) {
    return 'adsec:access'; 
  }
  if (pathname.startsWith('/view/secretary')) {
    return 'adsec:access'; 
  }
  if (pathname.startsWith('/view/patient')) {
    return 'medsec:access'; 
  }
  if (pathname.startsWith('/view/medicalrecord')) {
    return 'medico:access'; 
  }

  const routePermissions: Record<string, string> = {
    '/admin/create/doctor': 'admin:access',
    '/admin/create/patient': 'admin:access',
    '/admin/create/secretary': 'admin:access',
    '/password/change': 'common:access',
    '/search/patient': 'medsec:access',
    '/search/doctor': 'medsec:access',
    '/search/secretary': 'admin:access',
    '/selectrole': 'common:access',
    '/403': 'common:access',
  };

  return routePermissions[pathname] || null;  
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
