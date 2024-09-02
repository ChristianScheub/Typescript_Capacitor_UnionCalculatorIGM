import { Bundesland } from "./Bundesland";

export const holidaysPerState: { [key in Bundesland]: number } = {
    [Bundesland.BADEN_WUERTTEMBERG]: 12,
    [Bundesland.BAVARIA]: 13,
    [Bundesland.BERLIN]: 10,
    [Bundesland.BRANDENBURG]: 12,
    [Bundesland.BREMEN]: 10,
    [Bundesland.HAMBURG]: 10,
    [Bundesland.HESSE]: 10,
    [Bundesland.MECKLENBURG_WESTERN_POMERANIA]: 11,
    [Bundesland.LOWER_SAXONY]: 10,
    [Bundesland.NORTH_RHINE_WESTPHALIA]: 11,
    [Bundesland.RHINELAND_PALATINATE]: 12,
    [Bundesland.SAARLAND]: 12,
    [Bundesland.SAXONY]: 12,
    [Bundesland.SAXONY_ANHALT]: 12,
    [Bundesland.SCHLESWIG_HOLSTEIN]: 10,
    [Bundesland.THURINGIA]: 11,
    [Bundesland.EMPTY]: 0,
  };
  