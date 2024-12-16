# GLua-Utils Extension
---

## Overview
This Quality-of-Life extension makes your GLua coding more efficient and faster. Who hates to always search for the SWEP or Entity structure to just copy and paste it?

## Features
- **Snippet Library:** A collection of useful snippets for GLua development.
- **Easy Insertion:** Quickly insert code snippets with just a few keystrokes.
- **Visual Studio Code Integration:** Seamlessly integrates with Visual Studio Code for a smooth coding experience.

## Contributors 
1. Sintact - Creator of the extension
2. Fedox - For the idea and inspiration

## How to use it?
1. Install the Extension from the Visual Studio Code Marketplace.
2. Open a Lua file and type in the prefix of the snippet and press 'Tab'.

## Snippets

### glua.SWEP
```lua
    SWEP.PrintName = "NAME",
    SWEP.Author = "AUTHOR",
    SWEP.Contact = "CONTACT",
    SWEP.Purpose = "PURPOSE",
    SWEP.Instructions = "INSTRUCTIONS",
    SWEP.Spawnable = true,
    SWEP.AdminOnly = false,
    SWEP.Category = "CATEGORY",
    
    SWEP.ViewModel = "VIEWMODEL",
    SWEP.WorldModel = "WORLDMODEL",
    SWEP.UseHands = true,
    
    SWEP.Slot = SLOT,
    SWEP.SlotPos = SLOTPOS,
    
    SWEP.Primary.Ammo = "PRIMARYAMMO",
    SWEP.Primary.ClipSize = "CLIPSIZE",
    SWEP.Primary.DefaultClip = "DEFAULTCLIP",
    SWEP.Primary.Automatic = true,
    
    SWEP.Secondary.Ammo = "SECONDARYAMMO",
    SWEP.Secondary.ClipSize = "CLIPSIZE",
    SWEP.Secondary.DefaultClip = "DEFAULTCLIP",
    SWEP.Secondary.Automatic = false,
    
    SWEP.DrawCrosshair = true,
    SWEP.HoldType = "HOLDTYPE",
    
    function SWEP:Initialize(),
        self:SetHoldType(self.HoldType),
    end
```

### glua.Entity
```lua
    ENT.Type = "anim",
    ENT.Base = "base_gmodentity",
    ENT.PrintName = "NAME",
    ENT.Author = "AUTHOR",
    ENT.Contact = "CONTACT",
    ENT.Purpose = "PURPOSE",
    ENT.Instructions = "INSTRUCTIONS",
    ENT.Spawnable = true,
    ENT.AdminOnly = false,
    ENT.Category = "CATEGORY",
    ,
    function ENT:Initialize(),
        if SERVER then,
            self:SetModel("MODEL"),
            self:PhysicsInit(SOLID_VPHYSICS),
            self:SetMoveType(MOVETYPE_VPHYSICS),
            self:SetSolid(SOLID_VPHYSICS),
            self:PhysWake(),
        end,
    end,
    ,
    function ENT:Draw(),
        if CLIENT then,
           self:DrawModel(),
        end,
    end
```

### glua.Entity-Shared
```lua
    ENT.Type = "anim",
    ENT.Base = "base_gmodentity",
    ENT.PrintName = "NAME",
    ENT.Author = "AUTHOR",
    ENT.Contact = "CONTACT",
    ENT.Purpose = "PURPOSE",
    ENT.Instructions = "INSTRUCTIONS",
    ENT.Spawnable = true,
    ENT.AdminOnly = false,
    ENT.Category = "CATEGORY"
```

### glua.Entity-Server
```lua
    AddCSLuaFile( "cl_init.lua" )
    AddCSLuaFile( "shared.lua" )
    
    include('shared.lua')

    function ENT:Initialize(),
        self:SetModel("MODEL"),
        self:PhysicsInit(SOLID_VPHYSICS),
        self:SetMoveType(MOVETYPE_VPHYSICS),
        self:SetSolid(SOLID_VPHYSICS),
        self:PhysWake(),
    end
```

### glua.Entity-Client
```lua
    include("shared.lua")

    function ENT:Draw(),
        self:DrawModel(),
    end
```