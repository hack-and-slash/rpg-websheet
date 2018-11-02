import React from 'react';
import ModifierField from '../component/ModifierField';

const OldDragon = () => (
    <div id="sheet_old_dragon">
        <ModifierField min={1} max={29} name="str" title="Strenght" />
        <ModifierField min={1} max={29} name="dex" title="Dexterity" />
        <ModifierField min={1} max={29} name="con" title="Constitution" />
        <ModifierField min={1} max={29} name="int" title="Inteligence" />
        <ModifierField min={1} max={29} name="wis" title="Wisdom" />
        <ModifierField min={1} max={29} name="cha" title="Charisma" />
    </div>
)

export default OldDragon;