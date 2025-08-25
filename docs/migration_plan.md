

## **Plan: Replace Purple Theme with Ride-with-Supr Green Theme**

### **Current Color Analysis:**

**Ride-with-Supr Theme (Approved by Client):**
- **Primary Green:** `green-600` (#059669), `green-500`, `green-400`  
- **Background:** `from-green-400 via-blue-500 to-purple-600` gradient (but we'll modify this)
- **Accent Colors:** Clean whites, grays, and subtle blue accents
- **Focus/Hover:** `green-700` for deeper interactions

**Current Purple Theme (To Replace):**
- **Purple Colors:** `purple-600`, `purple-700`, `purple-800`, `purple-900`
- **Background Gradients:** `from-purple-600 to-purple-800`, `from-purple-800 to-purple-900`
- **CSS Variables:** `--color-primary-500: #9c27b0`, `--color-primary-600: #7b1fa2`, `--color-primary-700: #6a1b9a`

### **Implementation Plan:**

#### **Phase 1: Update Global Color System**
1. **Update `globals.css`** - Replace purple CSS variables with green equivalents
2. **Modify gradient backgrounds** from purple-based to green-based themes

#### **Phase 2: Update Core Components** 
1. **Header.tsx** - Change purple logo and gradient backgrounds to green
2. **Footer.tsx** - Update any purple accents to green theme
3. **LocationModal.tsx** - Replace purple elements with green styling

#### **Phase 3: Update Page-Specific Components**
1. **Del Areas** (`/s/del-areas/`) - Purple gradient backgrounds to green
2. **Blog** (`/blog/`) - Purple hero section to green theme  
3. **Customer Support** (`/customer-support/`) - Purple elements to green
4. **Career** (`/career/`) - Purple backgrounds to green
5. **Press** (`/s/press/`) - Purple accents to green
6. **Account Pages** (`/account/`) - Purple elements to green

#### **Phase 4: Delivery Partners & Forms**
1. **Delivery Partner Form** - Update purple form elements to green
2. **Terms & Privacy Pages** - Replace purple accents with green

#### **Phase 5: Maintain Ride-with-Supr Integrity**
- Keep the ride-with-supr components exactly as they are (client approved)
- Ensure the green theme is consistent across all other pages

### **Color Mapping Strategy:**
- `purple-600` → `green-600`
- `purple-700` → `green-700` 
- `purple-800` → `green-800`
- `purple-900` → `green-900`
- Purple gradients → Green-to-blue or green-to-teal gradients
- CSS primary colors → Green equivalents

### **Expected Outcome:**
- Unified green theme across entire application
- Consistent with client-approved ride-with-supr design
- Professional, modern appearance
- Better brand consistency

Would you like me to start implementing this plan? I'll begin with Phase 1 (global color system) and work through each phase systematically.