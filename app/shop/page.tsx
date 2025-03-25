import { products, getProductsByCategory } from "@/lib/products"
import ProductCard from "@/components/product-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ShopPage() {
  const categories = [
    { id: "all", name: "All Products" },
    { id: "brownies", name: "Brownies" },
    { id: "cookies", name: "Cookies" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brown-800 mb-4">Our Sweet Treats</h1>
        <p className="text-lg text-brown-600 max-w-2xl mx-auto">
          Browse our selection of homemade desserts, all made with love and the finest ingredients
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full flex justify-center mb-8 bg-muted">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        {categories.slice(1).map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getProductsByCategory(category.id).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

