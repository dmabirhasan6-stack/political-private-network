"use client";

import React, { useMemo, useState } from 'react';
import { Shield, Users, MessageSquare, Phone, Video, Bot, FileText, Newspaper, UserRound, ClipboardList, CalendarDays, GraduationCap, Vote, PieChart, UserCheck, IdCard, Bell, Headphones, Database, Globe2, ShieldCheck, BookOpen, BriefcaseBusiness, Search, Settings, Smartphone, Droplets, Menu, X, CheckCircle2, Clock3, MapPin, Mail, MoreHorizontal, Plus, Check, ArrowUpRight, Activity, Megaphone, Lock, LogOut, ChevronRight, Send, Paperclip, BarChart3, AlertTriangle } from 'lucide-react';

type Icon = React.ElementType;
type Module = {title:string; desc:string; route:string; icon:Icon; badge?:string};

