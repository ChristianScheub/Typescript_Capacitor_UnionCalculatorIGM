import { Bundesland } from './Bundesland'

export function isWestGermany(land: Bundesland): boolean {
  switch (land) {
    case Bundesland.BADEN_WUERTTEMBERG:
    case Bundesland.BAVARIA:
    case Bundesland.BREMEN:
    case Bundesland.HAMBURG:
    case Bundesland.HESSE:
    case Bundesland.LOWER_SAXONY:
    case Bundesland.NORTH_RHINE_WESTPHALIA:
    case Bundesland.RHINELAND_PALATINATE:
    case Bundesland.SAARLAND:
    case Bundesland.SCHLESWIG_HOLSTEIN:
    case Bundesland.BERLIN:
      return true
    default:
      return false
  }
}

export function mapStringToBundesland(input: string): Bundesland | undefined {
  return Object.values(Bundesland).find(land => land === input);
}