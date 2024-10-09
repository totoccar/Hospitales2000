
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

  if (pathname.startsWith('/search/patient')) {
    return 'medsec:access';
  }

  if(pathname.startsWith('/appointment/request')) {
    return 'paciente:access';
  }

  if(pathname.startsWith('/appointment/calendar')) {
    return 'secretaria:access';
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
    '/appointment/calendar': 'medico:access',
    '/403': 'common:access',
    '/appointment/request': 'paciente:access',
    '/appointment/search': 'common:access',
    '/appointment/view': 'common:access',
    '/appointment/view/doctor': 'common:access',
    '/appointment/view/patient': 'common:access',
    
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
