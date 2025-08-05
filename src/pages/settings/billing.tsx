import { Separator } from "@/components/ui/separator";

const Billing = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Billing</h3>
        <p className="text-sm text-muted-foreground">
          Manage your subscription and billing information
        </p>
      </div>
      <Separator />

      <div className="w-full">
        <div className="mt-0 text-center py-10">
          <h1 className="text-2xl font-bold mb-4">🚧 Billing Section In Development 🚧</h1>
          <p className="text-base mb-2">
            We're working hard to bring you a seamless billing and subscription management experience.
          </p>
          <p className="text-base mb-2">
            Soon you'll be able to view your current plan, upgrade, manage payments, and access invoices directly from this dashboard.
          </p>
          <p className="text-base text-muted-foreground">
            Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Billing;
