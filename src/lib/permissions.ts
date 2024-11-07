
export function getPermission(pathname: string): string | null {

  if (pathname.startsWith('/view/doctor')) {
    return 'adsec:access';
  }
  if (pathname.startsWith('/view/secretary')) {
    return 'adsec:access';
  }
  if (pathname.startsWith('/view/patient')) {
    return 'admedsec:access';
  }
  if (pathname.startsWith('/view/medicalrecord')) {
    return 'medico:access';
  }

  if (pathname.startsWith('/search/patient')) {
    return 'admedsec:access';
  }

  if (pathname.startsWith('/appointment/request')) {
    return 'common:access';
  }

  if (pathname.startsWith('/appointment/secretarycalendar')) {
    return 'adsec:access';
  }

  if (pathname.startsWith('/appointment/setschedule')) {
    return 'admedsec:access';
  }

  if (pathname.startsWith('/appointment/cancel')) { 
    return 'paciente:access';
  }

  if(pathname.startsWith('/appointment/request')) {
    return 'common:access';
  }

  if(pathname.startsWith('/appointment/assign')) {
    return 'adsec:access';
  }

  if(pathname.startsWith('/appointment/modify')) {
    return 'admedsec:access';
  }

  if(pathname.startsWith('/appointment/medicalcalendar')) {
    return 'medico:access';
  }

  if(pathname.startsWith('/appointment/secretarycalendar')) {
    return 'adsec:access';
  }

  const routePermissions: Record<string, string> = {
    '/admin/create/doctor': 'adsec:access',
    '/admin/create/patient': 'adsec:access',
    '/admin/create/secretary': 'admin:access',
    '/password/change': 'common:access',
    '/search/patient': 'admedsec:access',
    '/search/doctor': 'adsec:access',
    '/search/secretary': 'admin:access',
    '/selectrole': 'common:access',
    '/appointment/calendar': 'medico:access',
    '/403': 'common:access',
    '/appointment/request': 'paciente:access',
    '/appointment/search': 'common:access',
    '/appointment/view': 'common:access',
    '/appointment/view/doctor': 'common:access',
    '/appointment/view/patient': 'common:access',
    '/appointment/medicalcalendar': 'medico:access',
    'appointment/setschedule': 'medsec:access',
    
  };

  return routePermissions[pathname] || null;
}


export function hasPermission(role: string, permission: string): boolean {
  const rolePermissions: Record<string, string[]> = {
    'Administrador': ['admin:access', 'adsec:access', 'common:access','admedsec:access'],
    'Medico': ['medico:access', 'medsec:access', 'common:access','admedsec:access'],
    'Secretaria': ['secretaria:access', 'medsec:access', 'adsec:access', 'common:access','admedsec:access'],
    'Paciente': ['paciente:access', 'common:access'],
  };

  const permissions = rolePermissions[role] || [];
  return permissions.includes(permission); 
}
