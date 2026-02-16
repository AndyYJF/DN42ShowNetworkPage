# Claude Code Prompt: DN42 AS Website Frontend Generation Guide

## Role & Goal

**Language Requirement:** The generated frontend interface must be in English.

You are an expert Frontend Developer, skilled in building modern network monitoring and display panels. Your goal is to create a single-page display site for my **DN42 (Decentralized Network 42)** Autonomous System (AS). The site's design is inspired by [prefixlabs.net](https://prefixlabs.net/), aiming to present my network nodes, peering policy, and network statistics in an intuitive and professional manner.

## Visual Style & Layout Requirements

Since I have a UI design plugin installed, please focus on the page structure, component-based development, and content organization. The page should adopt a dark theme (Dark Mode) to create a high-tech Network Operations Center (NOC) aesthetic.

### Core Page Structure

| Module Name | Function Description | Key Elements |
| :--- | :--- | :--- |
| **Navigation Bar (Navbar)** | Fixed top navigation for quick jumps. | Site Logo (e.g., "MyAS - DN42"), navigation links. |
| **Hero Section** | Introduces the AS's basic identity and core positioning. | AS Name, AS Number, brief description, "Request Peering" button. |
| **Network Map (Map)** | Displays global node distribution using **Leaflet.js**. | Dark map base, node markers, click to show details. |
| **Node List (Nodes)** | Lists all network server nodes in a table. | Node ID, geographical location, clearnet hostname, peering status. |
| **Peering Policy (Peering)** | Details peering requirements and network information. | Admission rules (e.g., ROA checks), IP address ranges. |
| **Statistics (Stats)** | Displays key network metrics in card format. | Establishment date, hop count statistics, continents covered, number of peers. |

## Technical Details

### Map Component Implementation
The map is the core of this site. Please use `Leaflet.js` and configure a `CartoDB Dark Matter` style base map. You need to implement a dynamic marker function that generates markers on the map by reading a node array, and ensures that clicking a marker displays the specific information of that node.

### Data-Driven Design
To facilitate my subsequent updates to AS information, please extract all network data (such as AS number, IP segments, node list) into a separate configuration file or constant object.

| Data Item | Example/Placeholder |
| :--- | :--- |
| **AS Number** | `AS424242XXXX` |
| **IPv4 Range** | `172.20.X.X/24` |
| **IPv6 Range** | `fde4:XXXX:XXXX::/48` |
| **Node Data** | At least include ID, city, country, latitude, longitude, status. |

## Specific Instructions for Claude Code

1.  **Project Initialization**: Create a modern frontend project (recommend React + Tailwind CSS, or choose the most suitable framework based on the environment).
2.  **Component-Based Development**: Break down the map, table, and statistics cards into independent React components to ensure clear code structure.
3.  **Responsive Layout**: Ensure the page displays well on both mobile and desktop, and that tables support horizontal scrolling on small screens.
4.  **Enhanced Interactivity**: Add hover effects to buttons and simple animations to map markers to improve user experience.
5.  **UI Plugin Collaboration**: After generating the basic structure, use the design plugin to optimize colors, shadows, and rounded corners to achieve a high-end feel similar to PrefixLabs.
6.  **Page Attribution**: Add a line of text in the footer section explicitly stating, "This page was 100% created by Claude Code."
